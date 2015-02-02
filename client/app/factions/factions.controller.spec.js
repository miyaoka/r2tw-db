'use strict';

describe('Controller: FactionsCtrl', function () {

  // load the controller's module
  beforeEach(module('twdbApp'));

  var FactionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FactionsCtrl = $controller('FactionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
