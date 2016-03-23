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
    self.preloader = false;
    pocemons.getPocemons().then(function(res) {
      self.next = angular.copy(res.data.meta.next);
      self.pocemons = angular.copy(res.data.objects);
      self.preloader = !self.preloader;
      // $scope.pocemons = angular.copy(res.data.objects);
    });
    self.morePocemons = function (next) {
      pocemons.getPocemons(next).then(function(res){
        self.next = angular.copy(res.data.meta.next);
        self.pocemons = angular.copy(res.data.objects);
        self.preloader = !self.preloader;
      });
    }
    self.seePocemonDetails = function(pocemon){
        self.info = angular.copy(pocemon);
    };
  });
