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

myApp.directive('articlesBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/articles-block.html',
        controller: function(Articles, $rootScope, $scope){

            $rootScope.$on('article:updated', function(){
                $scope.articles = Articles.getAll();
            });

            $rootScope.$on('article:deleted', function(){
                $scope.articles = Articles.getAll();
            });

            $rootScope.$on('article:error', function(){
                console.log('ERROR!!!');
            })

            $scope.deleteArticle = function(id){
                Articles.delete(id);
            };
        }
    };
});

myApp.directive('newArticleBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/new-article-block.html',
        controller: function (Articles, $rootScope, $scope) {
            $scope.article = {};

            $scope.addNewArticle = function () {
                $scope.article.date = new Date();
                Articles.add($scope.article);
                $scope.article = {};
            };
        }
    };
});

myApp.directive('editArticleBlock', function(){
    return {
        restrict: 'E',
        templateUrl: 'views/edit-article-block.html',
        controller: function (Articles, $rootScope, $scope) {

            $scope.editArticle = {};

            $scope.editArticleClick = function(id){
                $scope.editArticle = Articles.get(id);
            }

            $scope.editArticleForm = function(){
                Articles.edit($scope.editArticle);
            }
        }
    }
})