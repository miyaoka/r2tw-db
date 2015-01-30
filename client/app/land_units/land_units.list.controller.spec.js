'use strict';

describe('Controller: LandUnitsCtrl', function () {

  // load the controller's module
  beforeEach(module('twdbApp'));

  var LandUnitsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandUnitsCtrl = $controller('LandUnitsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
