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
  });
