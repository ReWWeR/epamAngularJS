'use strict';

/**
 * @ngdoc function
 * @name epamAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the epamAngularJsApp
 */
angular.module('epamAngularJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
