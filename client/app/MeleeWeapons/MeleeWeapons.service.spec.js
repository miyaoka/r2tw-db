'use strict';

describe('Service: MeleeWeapons', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var MeleeWeapons;
  beforeEach(inject(function (_MeleeWeapons_) {
    MeleeWeapons = _MeleeWeapons_;
  }));

  it('should do something', function () {
    expect(!!MeleeWeapons).toBe(true);
  });

});
