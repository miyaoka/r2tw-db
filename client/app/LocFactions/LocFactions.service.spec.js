'use strict';

describe('Service: LocFactions', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var LocFactions;
  beforeEach(inject(function (_LocFactions_) {
    LocFactions = _LocFactions_;
  }));

  it('should do something', function () {
    expect(!!LocFactions).toBe(true);
  });

});
