'use strict';

describe('Service: Factions', function () {

  // load the service's module
  beforeEach(module('twdbApp'));

  // instantiate service
  var Factions;
  beforeEach(inject(function (_Factions_) {
    Factions = _Factions_;
  }));

  it('should do something', function () {
    expect(!!Factions).toBe(true);
  });

});
