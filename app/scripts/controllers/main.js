'use strict';

/**
 * @ngdoc function
 * @name rmVisualApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rmVisualApp
 */
angular.module('rmVisualApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get("data/sample.json").success (function (data) {
    	$scope.projectdata = data.projects;
    	$scope.consultantdata = data.consultants;
    });

    $scope.getLocationColor = function (location) {
    	switch (location) {
    		case "melbourne":
    			return "red";
    		case "sydney":
    			return "green";
			case "brisbane":
				return "yellow";
			default:
				return "blue";
    	}
    };
  });
