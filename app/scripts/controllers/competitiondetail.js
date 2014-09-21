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

    $http.get('/vs_api/competition?id=' + $routeParams.id)
      .success(function(data){
        $scope.competition = data;
      });

    $http.get('/vs_api/competition/competitors?competition_id=' + $routeParams.id)
      .success(function(data){

//        data.forEach(function(player){
//
//        });

        $scope.maxElo = (data[0]) ? data[0].elo : 100;

        $scope.competitors = data;
      });

  });
