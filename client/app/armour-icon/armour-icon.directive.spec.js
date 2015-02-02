'use strict';

describe('Directive: armourIcon', function () {

  // load the directive's module and view
  beforeEach(module('twdbApp'));
  beforeEach(module('app/armour-icon/armour-icon.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<armour-icon></armour-icon>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the armourIcon directive');
  }));
});