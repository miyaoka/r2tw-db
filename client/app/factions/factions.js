'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.factions', {
        url: '/factions?key&screenName&militaryGroup&subculture&diplomacyCulture&showRebel&showCivilWar',
        templateUrl: 'app/factions/factions.html',
        controller: 'FactionsCtrl'
      })
      .state('main.factions.detail', {
        url: '/:id',
        templateUrl: 'app/factions/factions.detail.html',
        controller: 'FactionsDetailCtrl'
      });
  });