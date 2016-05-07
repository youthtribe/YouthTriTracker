"use strict";

angular.module("youthTribe")
	.controller("rewardsController", ["$scope", "$http", "firebaseFactory", function(rewardsController, $http, fb) {

		fb.init(rewardsController.$parent);

		rewardsController.rewards = fb.getRewards();

		rewardsController.showManualRewardForm = function(reward) {
			var origHidden = $(".manual-reward-form-" + reward.uniqueKey).hasClass("hidden");

			$(".manual-reward-form").addClass("hidden");
			$(".manual-reward-form-" + reward.uniqueKey).toggleClass("hidden", !origHidden);
		};

		rewardsController.addManualReward = function(reward, manualReward) {
			var profileManualMedalsFirebase = fb.getProfileManualMedalsFirebase(),
				newManualMedal,
				newManualMedalKey;

			newManualMedal = profileManualMedalsFirebase.push(reward);
			newManualMedalKey = newManualMedal.key();

			newManualMedal.update({
				"uniqueKey": newManualMedalKey,
				"date": manualReward.dateAwarded,
				"eventName": manualReward.eventName
			});

			$(".manual-reward-form").hide();
		};
	}]);
