'use strict';

describe('Service: UnitArmourTypes', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var UnitArmourTypes;
  beforeEach(inject(function (_UnitArmourTypes_) {
    UnitArmourTypes = _UnitArmourTypes_;
  }));

  it('should do something', function () {
    expect(!!UnitArmourTypes).toBe(true);
  });

});
