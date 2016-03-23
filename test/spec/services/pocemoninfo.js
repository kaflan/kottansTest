'use strict';

describe('Service: pocemonInfo', function () {

  // load the service's module
  beforeEach(module('kotansApp'));

  // instantiate service
  var pocemonInfo;
  beforeEach(inject(function (_pocemonInfo_) {
    pocemonInfo = _pocemonInfo_;
  }));

  it('should do something', function () {
    expect(!!pocemonInfo).toBe(true);
  });

});
