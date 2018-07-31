
var botApp = angular.module('botApp', [
	'ngRoute',
    ]);

botApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	// $controllerProvider.allowGlobals();
	//$locationProvider.html5Mode(true).hashPrefix('!');
	$routeProvider
	.when('/',
		{
			templateUrl : "modules/views/index.html",
			controller : "chatbotController"
		})
	.when('/bothome',
	{
		templateUrl : "modules/views/adminHome.html",
		controller  : "chatbotController"
	})
	.otherwise({
        redirectTo: '/'
      });


}]);