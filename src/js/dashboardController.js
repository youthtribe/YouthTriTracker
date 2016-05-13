import {findAge} from "./converters";

angular.module("youthTribe")
	.controller("dashboardController", ["$scope", "$http", "firebaseFactory", "$state", function(dashboardController, $http, fb, $state) {
		dashboardController.dashboard = {
			"swimCompleted": 0,
			"bikeCompleted": 0,
			"runCompleted": 0,
			"runGoal": 26,
			"bikeGoal": 50,
			"swimGoal": 3000,
			"startDate": "",
			"endDate": "",
			"inDateRange": false,
			"daysRemaining": 0,
			"age": 0,
			"activities": [{}]
		};

		fb.init(dashboardController.$parent);
		fb.getFirebaseActivities().$loaded()
			.then(function(activityData) {
				fb.getViewData().$loaded()
					.then(function(viewData) {
						fb.getProfile().$loaded()
							.then(function(profileData) {
								dashboardController.profile = profileData;
								dashboardController.dashboard.age = findAge(+new Date(dashboardController.profile.dateOfBirth));

								dashboardController.viewData = viewData;
								dashboardController.dashboard.username = viewData.leaderboard.username;
								dashboardController.loadGoals();

								dashboardController.dashboard.activities = activityData;
								dashboardController.sumActivities();
							});
					});
			});

		fb.getRestrictDates().$loaded()
			.then(function(data) {
				dashboardController.dashboard.startDate = data.startDate;
				dashboardController.dashboard.endDate = data.endDate;

				var oneDay = 24*60*60*1000,
					lastDate = new Date(data.endDate),
					beginDate = new Date(data.startDate),
					currentDate = new Date(),
					days,
					inRange;

				//set the time to midnight of the current date
				currentDate.setHours(0, 0, 0, 0);

				days = Math.round(Math.abs((lastDate.getTime() - currentDate.getTime())/(oneDay)));
				inRange = currentDate >= beginDate && currentDate <= lastDate;

				dashboardController.dashboard.inDateRange = inRange;
				dashboardController.dashboard.daysRemaining = days;
			});

		dashboardController.goLeaderboard = function(child) {
			$state.go("dashboard.id", {"id": child.uniqueKey});
		};

		dashboardController.goProfiles = function() {
			$state.go("profiles");
		};

		dashboardController.sumActivities = function() {
			var filterKey = /-/,
				filtered = [],
				activities = [],
				types = ["swim", "bike", "run"],
				key,
				i;

			// Get keys for the actual activity objects.
			for (key in dashboardController.dashboard.activities) {
				if (dashboardController.dashboard.activities.hasOwnProperty(key) && filterKey.test(key)) {
					filtered.push(key);
				}
			}

			// Get the activity array based on the keys we got earlier.
			for (i = 0; i < filtered.length; i++) {
				activities.push(dashboardController.dashboard.activities[filtered[i]]);
			}

			// for each type, sum up and added to distance completed.

			$.each(types, function(index) {
				dashboardController.dashboard[types[index] + "Completed"] =
					activities
						.filter(function(val) {
							// TODO: 6-months prior to end date -> end date
							return val.type === types[index];
						}).reduce(function(a, b) {
							return a + b.length;
						}, 0);
			});
		};

		dashboardController.loadGoals = function() {
			var age = dashboardController.dashboard.age;

			dashboardController.dashboard.swimGoal = dashboardController.findGoal(age, "swim");
			dashboardController.dashboard.bikeGoal = dashboardController.findGoal(age, "bike");
			dashboardController.dashboard.runGoal = dashboardController.findGoal(age, "run");
		};

		dashboardController.findGoal = function(age, type) {
			try {
				return dashboardController.viewData.goals["age_" + age][type].goal;
			} catch (ex) {
				// TODO: Handle
			}
		};

		dashboardController.hasActivities = false;
		dashboardController.haveActivities = function() {
			dashboardController.hasActivities = true;
		};
	}]);
