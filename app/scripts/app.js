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
      templateUrl: 'app/views/competitiondetail.html',
      controller: 'CompetitionDetailCtrl'
    })
    .when('/competition/:id/game', {
      templateUrl: 'app/views/game-create.html',
      controller: 'GameCreateCtrl'
    })
    .when('/game', {
      templateUrl: 'views/game.html',
      controller: 'GameCtrl'
    })
    .otherwise({redirectTo: '/competition'})}
  ]);
