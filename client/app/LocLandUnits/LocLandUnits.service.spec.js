'use strict';

describe('Service: LocLandUnits', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var LocLandUnits;
  beforeEach(inject(function (_LocLandUnits_) {
    LocLandUnits = _LocLandUnits_;
  }));

  it('should do something', function () {
    expect(!!LocLandUnits).toBe(true);
  });

});
