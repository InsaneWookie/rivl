'use strict';

describe('Controller: CompetitiondetailCtrl', function () {

  // load the controller's module
  beforeEach(module('rivlApp'));

  var CompetitiondetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitiondetailCtrl = $controller('CompetitiondetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
