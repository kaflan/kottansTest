'use strict';

describe('Directive: pokedex', function () {

  // load the directive's module
  beforeEach(module('kotansApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pokedex></pokedex>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pokedex directive');
  }));
});
