'use strict';

/**
 * @ngdoc function
 * @name kotansApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kotansApp
 */
angular.module('kotansApp')
  .controller('PokedexCrl', function (pocemons) {
    var self = this;
    pocemons.getPocemons().then(function(res) {
      self.next = angular.copy(res.data.meta.next);
      self.pocemons = angular.copy(res.data.objects);
      // $scope.pocemons = angular.copy(res.data.objects);
    });
    self.morePocemons = function (next) {
      pocemons.getPocemons(next).then(function(res){
        self.next = angular.copy(res.data.meta.next);
        self.pocemons = angular.copy(res.data.objects);
      });
    }
    self.seePocemonDetails = function(pocemon){
        self.pocemonInfo = pocemon;
    };
  });
