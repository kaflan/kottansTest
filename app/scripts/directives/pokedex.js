'use strict';

/**
 * @ngdoc directive
 * @name kotansApp.directive:pokedex
 * @description
 * # pokedex
 */
angular.module('kotansApp')
  .directive('pokedex', function () {
    return {
      templateUrl: 'views/pokedex.html',
      restrict: 'E',
      controller: 'PokedexCrl',
      controllerAs: 'self'
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the pokedex directive');
      // }
    };
  });
