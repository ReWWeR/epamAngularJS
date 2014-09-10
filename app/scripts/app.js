'use strict';

/**
 * @ngdoc overview
 * @name angularHomeApp
 * @description
 * # angularHomeApp
 *
 * Main module of the application.
 */
angular
    .module('epamAngularJsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/article/:id', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
