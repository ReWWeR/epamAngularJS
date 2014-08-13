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
        controller: function (Articles, $rootScope, $scope, $timeout) {

            $scope.getAll = function () {
                $scope.articles = Articles.query();
            };

            $scope.getAll();

            $scope.deleteArticle = function (articleId) {
                Articles.delete({id: articleId});
                $rootScope.$broadcast('article:updated');
            };

            $rootScope.$on('article:updated', function(){
                $timeout(function () {
                    $scope.getAll();
                }, 200)
             });
/*
             $rootScope.$on('article:deleted', function(){
             $scope.articles = Articles.getAll();
             });

             $rootScope.$on('article:error', function(){
             console.log('ERROR!!!');
             })

             $scope.deleteArticle = function(id){
             Articles.delete(id);
             };*/
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
                Articles.save($scope.article);
                $scope.article = {};
                $rootScope.$broadcast('article:updated');
            };
        }
    };
});

myApp.directive('editArticleBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/edit-article-block.html',
        controller: function (Articles, $rootScope, $scope) {

            $scope.editArticle = {};

            $scope.editArticleClick = function (articleId) {
                $scope.articleId = articleId;
                $scope.editArticle = Articles.get({id: articleId});
            };

            $scope.editArticleForm = function () {
                Articles.update({id: $scope.articleId}, $scope.editArticle);
                $rootScope.$broadcast('article:updated');
            }
        }
    }
})