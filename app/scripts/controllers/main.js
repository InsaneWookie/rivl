'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('MainCtrl', function ($scope, $routeParams) {

    $scope.selectedCompetitionId = null;
//    if($routeParams.id){
//      $scope.selectedCompetitionId = $routeParams.id
//    }
  });
