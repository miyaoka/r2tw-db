'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.factions', {
        url: '/factions',
        templateUrl: 'app/factions/factions.html',
        controller: 'FactionsCtrl',
        resolve:{
          isList: function(){
            return false;
          }
        }
      })
      .state('main.factions.detail', {
        url: '/:id',
        templateUrl: 'app/factions/factions.detail.html',
        controller: 'FactionsDetailCtrl',
        resolve:{
          isDetail: function(){
//            return true;
          }
        }
      });
  });