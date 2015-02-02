'use strict';

describe('Service: UnitShieldTypes', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var UnitShieldTypes;
  beforeEach(inject(function (_UnitShieldTypes_) {
    UnitShieldTypes = _UnitShieldTypes_;
  }));

  it('should do something', function () {
    expect(!!UnitShieldTypes).toBe(true);
  });

});
