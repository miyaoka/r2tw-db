'use strict';

angular.module('twdbApp')
  .factory('Api', function ($resource) {
    return {
      mainUnits: $resource('/api/main_units/:id', {id: '@id'}),
      landUnits: $resource('/api/land_units/:id', {id: '@id'})
    };
  });
