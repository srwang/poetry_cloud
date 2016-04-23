'use strict';

//make request to poetry foundation
// var request = require("request"),
//   cheerio = require("cheerio"),
//   urlBase = "http://www.poetryfoundation.org/poetrymagazine/poem/" + 252078;

/* Controllers */

angular.module('myApp.controllers', []).
  controller('IndexCtrl', function ($scope, $http){
    $scope.poem = {
      title: "title",
      author: "author",
      bodyHtml: "some html"
    }
  });

