'use strict';

describe('Service: pocemon', function () {

  // load the service's module
  beforeEach(module('kotansApp'));

  // instantiate service
  var pocemon;
  beforeEach(inject(function (_pocemon_) {
    pocemon = _pocemon_;
  }));

  it('should do something', function () {
    expect(!!pocemon).toBe(true);
  });

});
