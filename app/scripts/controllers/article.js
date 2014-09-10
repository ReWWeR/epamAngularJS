'use strict';

var myApp = angular.module('epamAngularJsApp');

myApp.controller('ArticleCtrl', ['$scope', '$routeParams', 'Articles', function ($scope, $routeParams, Articles) {
    $scope.article = Articles.get({id: $routeParams.id});
}]);