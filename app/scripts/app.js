'use strict';

/**
 * @ngdoc overview
 * @name rivlApp
 * @description
 * # rivlApp
 *
 * Main module of the application.
 */
angular
  .module('rivlApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/competition', {
      templateUrl: 'app/views/competition.html',
      controller: 'CompetitionCtrl'
    })
    .when('/competition', {
        templateUrl: 'app/views/competition.html',
        controller: 'CompetitionCtrl'
    })
    .when('/competition/:id', {
      templateUrl: 'app/views/competition-detail.html',
      controller: 'CompetitionDetailCtrl'
    })
    .when('/competition/:id/game', {
      templateUrl: 'app/views/game-create.html',
      controller: 'GameCreateCtrl'
    })
    .when('/game', {
      templateUrl: 'app/views/game.html',
      controller: 'GameCtrl'
    })
    .when('/competition/:competitionId/player/:id', {
      templateUrl: 'app/views/player-detail.html',
      controller: 'PlayerDetailCtrl'
    })
    .otherwise({redirectTo: '/competition'})}
  ]);
