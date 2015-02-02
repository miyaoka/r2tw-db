'use strict';

describe('Service: UnitsToGroupingsMilitaryPermissions', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var UnitsToGroupingsMilitaryPermissions;
  beforeEach(inject(function (_UnitsToGroupingsMilitaryPermissions_) {
    UnitsToGroupingsMilitaryPermissions = _UnitsToGroupingsMilitaryPermissions_;
  }));

  it('should do something', function () {
    expect(!!UnitsToGroupingsMilitaryPermissions).toBe(true);
  });

});
