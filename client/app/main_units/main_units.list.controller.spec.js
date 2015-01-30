'use strict';

describe('Controller: MainUnitsListCtrl', function () {

  // load the controller's module
  beforeEach(module('twdbApp'));

  var MainUnitsListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainUnitsListCtrl = $controller('MainUnitsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
