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
        controller: function (Articles, $rootScope, $scope) {

                $scope.articles = Articles.query();

            $scope.deleteArticle = function (articleId) {
                Articles.delete({id: articleId})
                    .$promise.then(function(){
                    angular.forEach($scope.articles, function (value, i) {
                        if (value._id === articleId) {
                            $scope.articles.splice(i, 1);
                            return false;
                        }
                    });
                });
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
                Articles.save($scope.article)
                    .$promise.then(function(data){
                        $scope.articles.push(data);
                    });
                $scope.article = {};
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
                Articles.update({id: $scope.articleId}, $scope.editArticle)
                    .$promise.then(function(){
                        angular.forEach($scope.articles, function (value, i) {
                            if (value._id === $scope.articleId) {
                                $scope.articles.splice(i, 1, $scope.editArticle);
                                return false;
                            }
                        });
                    });
            };
        }
    };
});