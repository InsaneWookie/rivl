'use strict';

describe('Controller: PlayerDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('rivlApp'));

  var PlayerDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerDetailCtrl = $controller('PlayerDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
