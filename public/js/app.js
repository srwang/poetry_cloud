'use strict';

var myApp = angular.module('myApp', [
  'ngRoute', 
  'myApp.controllers', 
  'myApp.services', 
  'myApp.directives', 
  'myApp.filters'
]);
  
myApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.jade',
        controller: 'IndexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

