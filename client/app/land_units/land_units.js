'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('land_units', {
        abstract: true,
        url: '/land_units',
        template: '<ui-view/>'
      })
      .state('land_units.list', {
        url: '/list',
        templateUrl: 'app/land_units/land_units.list.html',
        controller: 'LandUnitsListCtrl'
      })
      .state('land_units.detail', {
        url: '/detail/:id',
        templateUrl: 'app/land_units/land_units.detail.html',
        controller: 'LandUnitsDetailCtrl'
      });
  });