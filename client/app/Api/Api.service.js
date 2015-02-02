'use strict';

angular.module('twdbApp')
  .factory('Api', function ($resource) {
    return {
      mainUnits: $resource('/api/main_units/:id', {id: '@id'}),
      landUnits: $resource('/api/land_units/:id', {id: '@id'}),
      factions: $resource('/api/factions/:id', {id: '@id'}),
      unitsToGroupingsMilitaryPermissions: $resource('/api/units_to_groupings_military_permissions'),
      meleeWeapons: $resource('/api/melee_weapons'),
      unitArmourTypes: $resource('/api/unit_armour_types'),
      unitShieldTypes: $resource('/api/unit_shield_types')
    };
  });
