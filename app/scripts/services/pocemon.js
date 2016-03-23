'use strict';

/**
 * @ngdoc service
 * @name kotansApp.pocemon
 * @description
 * # pocemon
 * Factory in the kotansApp.
 */
angular.module('kotansApp')
  .factory('pocemons', function ($http) {

    // Public API here
    return {
      getPocemons: function (next) {
        return $http.get('http://pokeapi.co' + (next ||  '/api/v1/pokemon/?limit=12'));
      }
    };
  });
