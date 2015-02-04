'use strict';

describe('Directive: iconArmour', function () {

  // load the directive's module and view
  beforeEach(module('twdbApp'));
  beforeEach(module('app/icon-armour/icon-armour.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<icon-armour></icon-armour>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the iconArmour directive');
  }));
});