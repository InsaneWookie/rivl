'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
