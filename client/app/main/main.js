'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        templateUrl: 'app/main/main.html',
      })
      .state('main.home', {
        url: '/',
        template: 'home',
        controller: 'MainCtrl'
      });
  });