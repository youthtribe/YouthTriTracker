import "./activityController";
import "./dashboardController";
import "./faqController";
import "./firebaseFactory";
import "./loginController";
import "./profileController";
import "./profilesController";
import "./registerController";
import "./rewardsController";
import "./routes";

angular.module("youthTribe", [
	"ionic",
	"firebase",
	"ui.router",
	"youthTribeRoutes"
])
.run(function($ionicPlatform, $rootScope, $state, $stateParams, $ionicScrollDelegate) {
	// When View Content Loaded //
	$rootScope.$on("$viewContentLoaded", function() {
		// Scroll to Top
		$ionicScrollDelegate.scrollTop(false);
	});

	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don"t remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}

		if (window.StatusBar) {
			StatusBar.styleDefault();
		}

		window.$scope = $rootScope;
		$rootScope.$state=$state;
		$rootScope.$stateParams = $stateParams;
	});
});
