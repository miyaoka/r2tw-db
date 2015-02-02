'use strict';

angular.module('twdbApp')
  .controller('FactionsDetailCtrl', function ($scope, $stateParams, Api, TableFactory) {
    console.log("factions.detail");
    $scope.factionId = $stateParams.id;

  });
