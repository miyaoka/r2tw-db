'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        templateUrl: 'app/main/main.html',
        resolve:{
          factions: function(Factions){
            return Factions.get().$promise;
          },
          unitsToGroupingsMilitaryPermissions: function(UnitsToGroupingsMilitaryPermissions){
            return UnitsToGroupingsMilitaryPermissions.get().$promise;
          },
          meleeWeapons: function(MeleeWeapons){
            return MeleeWeapons.get().$promise;
          },
          unitArmourTypes: function(UnitArmourTypes){
            return UnitArmourTypes.get().$promise;
          },
          unitShieldTypes: function(UnitShieldTypes){
            return UnitShieldTypes.get().$promise;
          },
          mainUnits: function(MainUnits){
            return MainUnits.get().$promise;
          },
          landUnits: function(LandUnits){
            return LandUnits.get().$promise;
          }
        }
      })
      .state('main.home', {
        url: '/',
        template: 'home',
        controller: 'MainCtrl'
      });
  });