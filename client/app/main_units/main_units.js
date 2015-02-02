'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.main_units', {
        abstract: true,
        url: '/main_units',
        template: '<ui-view/>'
      })
      .state('main.main_units.list', {
        url: '/list',
        templateUrl: 'app/main_units/main_units.list.html',
        controller: 'MainUnitsListCtrl'
      })
      .state('main.main_units.detail', {
        url: '/detail/:id',
        templateUrl: 'app/main_units/main_units.detail.html',
        controller: 'MainUnitsDetailCtrl'
      });
  });