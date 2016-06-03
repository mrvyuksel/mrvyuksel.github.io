'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('Home', {
            url: '/',
            templateUrl: './app/modules/home/home.html',
            controller: 'HomeCtrl as HomeVm'
        })
});

