'use strict';

describe('Controller: GameCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('rivlApp'));

  var GameCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCreateCtrl = $controller('GameCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
