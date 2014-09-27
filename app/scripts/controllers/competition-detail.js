'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:CompetitiondetailCtrl
 * @description
 * # CompetitiondetailCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('CompetitionDetailCtrl', function ($scope, $routeParams, $http) {

    var compId = $routeParams.id;

    //not sure if this is the best way to do this
    $scope.$parent.selectedCompetitionId = compId;


    $scope.competition = {};
    $scope.competitors = [];


    //todo rank and elo rounding
    /*
     <%
     var elo = Math.round(elo);
     %>

     <%
     var rank = $('#competitors .row').length + 1;

     var rankPostfix = 'moo';
     if(rank%100 > 3 && rank%100 < 21){
     rankPostfix = "th";
     } else if(rank%10 == 1) {
     rankPostfix = "st";
     } else if(rank%10 == 2) {
     rankPostfix = "nd";
     } else if(rank%10 == 3) {
     rankPostfix = "rd";
     } else {
     rankPostfix = "th";
     }

     %>
     */

    $http.get('/vs_api/competition?id=' + compId)
      .success(function(data){
        $scope.competition = data;
      });

    $http.get('/vs_api/competition/competitors?competition_id=' + compId)
      .success(function(data){
        $scope.maxElo = (data[0]) ? data[0].elo : 100;
        $scope.competitors = data;
      });

    $scope.todayGames = [];
    $scope.yesterdayGames = [];
    $http.get('vs_api/game?competition_id=' + compId).success(function(data){
      data.forEach(function(game){
        //TODO: I don't think adding stuff to the scope one by one is efficient as it recalculates the binds for each add
        //prob find for small lists
        if(game.today == "1"){
          $scope.todayGames.push(game);
        } else {
          $scope.yesterdayGames.push(game);
        }
      });
    });

  });
