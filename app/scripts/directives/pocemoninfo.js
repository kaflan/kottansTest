'use strict';

/**
 * @ngdoc directive
 * @name kotansApp.directive:pocemonInfo
 * @description
 * # pocemonInfo
 */
angular.module('kotansApp')
  .directive('info', function() {
    return {
      // require: '^pokedex',
      // replace: true,
      // transclude: true,
      templateUrl: 'views/info.html',
      controller: 'PokemonInfoCtrl',
      restrict: 'E',
      controllerAs: 'self',
      scope: {
        information: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch('information', function(val1, val2){
          if(typeof val1 !== 'undefined'){
            ctrl.info = scope.information;
          }
        },true);

      }
    }
  });
