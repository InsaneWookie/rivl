'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:PlayerDetailCtrl
 * @description
 * # PlayerDetailCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('PlayerDetailCtrl', function ($scope, $routeParams, $http) {

    var compId = $routeParams.competitionId;
    var playerId = $routeParams.id;

    //TODO: work out a better way of doing this MainCtrl selectedCompetitionId data
    $scope.$parent.selectedCompetitionId = compId;

    $scope.competitionId = compId;
    $scope.player = {};

    var params = { competition_id: compId, competitor_id: playerId };
    $http.get('vs_api/competitor_graph?competition_id=2&competitor_id=4', { params: params }).success(function(data){

      data.imgUrl = 'img/avatars/2_' + data.player_id + '_1.png';

//      data.stat_details.stat_array.forEach(function(stat){
//        stat.total_games
//      });

      $scope.player = data;
    });
  });
