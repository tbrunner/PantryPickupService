'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.requests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './views/requests.html',
		controller: 'requestsController'
	});
}])

.controller('requestsController', ['$scope', '$http', 'posts', function ($scope, $http, posts) {
	// create a message to display in our view
	$scope.message = 'Here is a list of all current requests. If you decide to fulfill a request, please remove it from the list.';
	posts.getAll();
	$scope.posts = posts.posts;
	//$http.get('/posts').success(function(data){
	//	$scope.ideas = data;
	//});
	$scope.remove = function(post){
		var n = noty({text: 'Request removed',
					  layout:'topLeft',
					  type:'success',
					  closeWith: ['hover'],
					  killer: true
					});
		posts.remove(post);
	}
}]);