'use strict';

/**
 * @ngdoc overview
 * @name kotansApp
 * @description
 * # kotansApp
 *
 * Main module of the application.
 */
angular
  .module('kotansApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ]);
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
