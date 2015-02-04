'use strict';

describe('Directive: iconWeapon', function () {

  // load the directive's module and view
  beforeEach(module('twdbApp'));
  beforeEach(module('app/icon-weapon/icon-weapon.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<icon-weapon></icon-weapon>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the iconWeapon directive');
  }));
});