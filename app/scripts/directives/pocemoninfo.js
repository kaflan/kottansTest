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
      require: 'ngModel',
      replace: true,
      transclude: true,
      templateUrl: 'views/info.html',
      controller: 'PokemonInfoCtrl',
      restrict: 'E',
      controllerAs: 'self',
      scope: {
        pocemInfo: '='
      },
      link: function(scope, element, attrs, ngModel) {
        console.log(ngModel, scope) //'myCtrl'
        scope.$watch("self.pocemonInfo", function(oldVal, newVal) {
               console.log(oldVal, newVal);
           }, true);
      }
    };
  });
