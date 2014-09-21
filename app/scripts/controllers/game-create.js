'use strict';

/**
 * @ngdoc function
 * @name rivlApp.controller:GameCreateCtrl
 * @description
 * # GameCreateCtrl
 * Controller of the rivlApp
 */
angular.module('rivlApp')
  .controller('GameCreateCtrl', function ($scope, $routeParams, $modal, $http) {

    var compId = $routeParams.id;

    $scope.competition = {};
    $scope.competitors = [];

    $http.get('vs_api/competition?id=' + compId).success(function(data){
      $scope.competition = data;
    });

    $http.get('vs_api/competition/competitors?competition_id=' + compId).success(function(data){

      data.forEach(function(player){
        player.avatarImg = compId + '_' + player.competitor_id + '_0.png';
      });

      $scope.competitors = data;
    });

    var dialog = null;

    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'GameCreateDialogCtrl',
        scope: $scope
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });

      dialog = modalInstance;
    };



    //TODO: this logic should probably be in the GameCreateDialogCtrl
    $scope.leftIndex = -1;
    $scope.rightIndex = -1;

    $scope.selectedLeftPlayer = null;
    $scope.selectedRightPlayer = null;

    var selectedFunc = function (){
      if($scope.leftIndex !== -1 && $scope.rightIndex !== -1){
        dialog.close();
      }
    };

    $scope.playerLeftClick = function($index, player){
      $scope.leftIndex = $index;
      $scope.selectedLeftPlayer = player;
      selectedFunc();
    };

    $scope.playerRightClick = function($index, player){
      $scope.rightIndex = $index;
      $scope.selectedRightPlayer = player;
      selectedFunc();
    };

    $scope.winners = [];

    $scope.addWon = function(winner){

      //loser is the player that was not selected
      var loser = ($scope.selectedLeftPlayer.competitor_id == winner.competitor_id)
        ? $scope.selectedRightPlayer
        : $scope.selectedLeftPlayer;

      var gameModel = {
        competition_id: compId,
        results: [
          { competitor_id: winner.competitor_id, rank: 1, score: 11 },
          { competitor_id: loser.competitor_id, rank: 2, score: -1 }
        ]
      };
      $scope.winners.push(gameModel);
    };

    $scope.saveGames = function(){
      console.log($scope.winners);

      var data = [];
      $scope.winners.forEach(function(winner){
        data.push(angular.copy(winner));
      });
      var params = jQuery.param({ gameModels: data});
      $http.get('vs_api/game_saver?' +params).success(function(data){
        console.log(data);
      })
    };



  }).controller('GameCreateDialogCtrl', function ($scope, $routeParams, $modal, $http) {

    //stuff for dialog logic

  });
