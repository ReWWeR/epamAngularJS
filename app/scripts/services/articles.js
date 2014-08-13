'use strict';

myApp.factory('Articles', ['$http', '$rootScope', '$resource', function ($http, $rootScope, $resource) {

    return $resource('http://54.72.3.96:3000/posts/:id', null,
        {
            'update': { method:'PUT' }
        });

    /*function getArticles() {
        $http({method: 'GET', url: 'http://54.72.3.96:3000/posts'})
            .success(function (data) {
                articles = data;
                $rootScope.$broadcast('article:updated');
            })
            .error(function (data) {
                $rootScope.$broadcast('article:error', data);
                console.log(data);
            });
    }

    getArticles();

    service.getAll = function () {
        return articles;
    };

    service.get = function (id) {
        var article = null;
        angular.forEach(articles, function(value){
            if (value._id === id) {
                article = value;
                return false;
            }
        });
        return article;
    };

    service.add = function (article) {
        $http({method: 'POST', url: 'http://54.72.3.96:3000/posts', data: article})
            .success(function (data) {
                articles.push(data);
                $rootScope.$broadcast('article:added', data);
            })
            .error(function (data) {
                $rootScope.$broadcast('article:error', data);
                console.log(data);
            });
    };

    service.delete = function (articleId) {
        $http({method: 'DELETE', url: 'http://54.72.3.96:3000/posts/' + articleId})
            .success(function (data) {
                angular.forEach(articles, function (value, i) {
                    if (value._id === articleId) {
                        articles.splice(i, 1);
                        return false;
                    }
                });
                $rootScope.$broadcast('article:deleted', data);
            })
            .error(function (data) {
                $rootScope.$broadcast('article:error', data);
                console.log(data);
            });
    };

    service.edit = function (article) {
        $http({method: 'PUT', url: 'http://54.72.3.96:3000/posts/' + article._id, data: article})
            .success(function (data) {
                $rootScope.$broadcast('article:edited', data);
            })
            .error(function (data) {
                $rootScope.$broadcast('article:error', data);
                console.log(data);
            });

    };

    return service;*/
}]);
