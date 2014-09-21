'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:CompetitionCtrl
 * @description
 * # CompetitionCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('CompetitionCtrl', function ($scope, $http) {
    $scope.competitions = [];

    $http.get('/vs_api/competition').success(function(data){
      $scope.competitions = data;
    });

  });
