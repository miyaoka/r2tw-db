'use strict';

angular.module('twdbApp')
  .controller('MainUnitsDetailCtrl', function ($scope, $stateParams, Api) {
    $scope.mu = {};

    Api.mainUnits.get({
      id: $stateParams.id
    }, function(mu) {
      Api.landUnits.query({
        key: mu.land_unit
      }, function(lu) {
        $scope.lu = lu[0];

      });

      $scope.mu = mu;
    });
  });
