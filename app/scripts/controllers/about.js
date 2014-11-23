'use strict';

/**
 * @ngdoc function
 * @name rmVisualApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rmVisualApp
 */
angular.module('rmVisualApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
