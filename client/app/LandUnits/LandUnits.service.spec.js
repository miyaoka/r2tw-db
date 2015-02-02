'use strict';

describe('Service: LandUnits', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var LandUnits;
  beforeEach(inject(function (_LandUnits_) {
    LandUnits = _LandUnits_;
  }));

  it('should do something', function () {
    expect(!!LandUnits).toBe(true);
  });

});
