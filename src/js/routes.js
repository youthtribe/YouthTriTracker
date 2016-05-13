angular.module("youthTribeRoutes", [
	"ui.router"
]).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider
		.state("login", {
			"url": "/login",
			"controller": "loginController",
			"templateUrl": "views/login.html"
		})
		.state("register", {
			"url": "/register",
			"controller": "registerController",
			"templateUrl": "views/register.html"
		})
		.state("profiles", {
			"url": "/profiles",
			"controller": "profilesController",
			"templateUrl": "views/profiles.html"
		})
		.state("dashboard", {
			"url": "/dashboard",
			"controller": "dashboardController",
			"templateUrl": "views/dashboard.html"
		})
		.state("dashboard.id", {
			"url": "/:id",
			"controller": "dashboardController",
			"templateUrl": "views/dashboard.html"
		})
		.state("profile", {
			"url": "/profile",
			"controller": "profileController",
			"templateUrl": "views/profile.html"
		})
		.state("profile.id", {
			"url": "/:id",
			"controller": "profileController",
			"templateUrl": "views/profile.html"
		})
		.state("rewards", {
			"url": "/rewards",
			"controller": "rewardsController",
			"templateUrl": "views/rewards.html"
		})
		.state("rewards.id", {
			"url": "/:id",
			"controller": "rewardsController",
			"templateUrl": "views/rewards.html"
		})
		.state("activity", {
			"url": "/activity",
			"controller": "activityController",
			"templateUrl": "views/activity.html"
		})
		.state("activity.id", {
			"url": "/:id",
			"controller": "activityController",
			"templateUrl": "views/activity.html"
		});
});
