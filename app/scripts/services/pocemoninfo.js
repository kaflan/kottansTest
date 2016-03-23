'use strict';

/**
 * @ngdoc service
 * @name kotansApp.pocemonInfo
 * @description
 * # pocemonInfo
 * Service in the kotansApp.
 */
 var obj = {}
angular.module('kotansApp')
  .factory('pocemonInfo', function () {
   return {
     savePocemon: function(pocemon){
        obj = angular.copy(pocemon);
     },
     loadPocemon: function() {
       return obj;
     }
   }
  });
