'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/add', {
		templateUrl: './views/add.html',
		controller: 'addController'
	});
}])

.controller('addController', ['$scope', '$http','posts', function ($scope, $http, posts) {
	// create a message to display in our view
	$scope.submit = function() {
		var itemName = $scope.itemName;
		var requestName = $scope.requestName;
		var data = {
			itemName: itemName,
			requestName: requestName,
		};
		posts.create(data);
		
		$scope.itemName = "";
		$scope.requestName = "";
		
		var n = noty({text: 'Request has been added',
					  layout:'topLeft',
					  type:'success',
					  closeWith: ['hover'],
					  killer: true
					});
	};
}]);