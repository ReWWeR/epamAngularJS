'use strict';

/**
 * @ngdoc function
 * @name angularHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHomeApp
 */
var myApp = angular.module('epamAngularJsApp');

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}]);

/*myApp.controller('loadArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
 $http.get('https://dl.dropboxusercontent.com/u/39441604/EPAM/angularJS/package.json')
 .success(function (data) {
 $scope.articles = angular.fromJson(data);
 });

 $scope.article = {};

 $scope.addNewArticle = function () {
 $scope.article.date = new Date();
 $scope.articles.push($scope.article);
 $scope.article = {};
 };
 }]);*/

myApp.directive('articlesBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/articles-block.html',
        controller: function ($scope, $http) {
            $http.get('https://dl.dropboxusercontent.com/u/39441604/EPAM/angularJS/package.json')
                .success(function (data) {
                    $scope.articles = angular.fromJson(data);
                });
        }
    };
});

myApp.directive('newArticleBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/new-article-block.html',
        controller: function ($scope) {
            $scope.article = {};

            $scope.addNewArticle = function () {
                $scope.article.date = new Date();
                $scope.articles.push($scope.article);
                $scope.article = {};
            };
        }
    };
});