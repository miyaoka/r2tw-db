'use strict';

describe('Directive: iconShield', function () {

  // load the directive's module and view
  beforeEach(module('twdbApp'));
  beforeEach(module('app/icon-shield/icon-shield.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<icon-shield></icon-shield>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the iconShield directive');
  }));
});