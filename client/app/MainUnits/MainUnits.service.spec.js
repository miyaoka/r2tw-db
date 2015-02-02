'use strict';

describe('Service: MainUnits', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var MainUnits;
  beforeEach(inject(function (_MainUnits_) {
    MainUnits = _MainUnits_;
  }));

  it('should do something', function () {
    expect(!!MainUnits).toBe(true);
  });

});
