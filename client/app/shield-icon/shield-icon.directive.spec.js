'use strict';

describe('Directive: shieldIcon', function () {

  // load the directive's module and view
  beforeEach(module('twdbApp'));
  beforeEach(module('app/shield-icon/shield-icon.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shield-icon></shield-icon>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shieldIcon directive');
  }));
});