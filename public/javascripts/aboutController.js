'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: './views/about.html',
		controller: 'aboutController'
	});
}])

.controller('aboutController', ['$scope', function ($scope) {
	// create a message to display in our view
	$scope.message = 'Are you too busy, too tired, or even just too lazy to make a trip all the way to the pantry?\n Then you have come to the right place! Place a request for something you desire from the pantry, and then wait! If you are lucky another kind soul will take pity on you and bring you that delicious treat!';
}]);