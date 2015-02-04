'use strict';

describe('Directive: fixedTableHeaders', function () {

  // load the directive's module
  beforeEach(module('twdbApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fixed-table-headers></fixed-table-headers>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fixedTableHeaders directive');
  }));
});