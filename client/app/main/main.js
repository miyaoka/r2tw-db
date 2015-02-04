'use strict';

angular.module('twdbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        templateUrl: 'app/main/main.html',
        resolve:{
          locLandUnits: function(LocLandUnits){
            return LocLandUnits.get().$promise;
          },
          locFactions: function(LocFactions){
            console.log(LocFactions);
            return LocFactions.get().$promise;
          },
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
          landUnits: function(LandUnits){
            return LandUnits.get().$promise;
          },
          mainUnits: function(MainUnits){
            return MainUnits.get().$promise;
          }
        }
      })
      .state('main.home', {
        url: '/',
        template: 'home',
        controller: 'MainCtrl'
      });
  });