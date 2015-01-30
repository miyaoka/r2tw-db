'use strict';

angular.module('twdbApp')
  .controller('LandUnitsDetailCtrl', function ($scope, $stateParams, Api) {
    $scope.landUnit = {};
    $scope.mainUnits = [];

    Api.landUnits.get({
      id: $stateParams.id
    }, function(landUnit) {
      $scope.landUnit = landUnit;

      Api.mainUnits.query({
        land_unit: landUnit.key
      }, function(mainUnits){
        $scope.mainUnits = mainUnits;
        console.log(mainUnits);
      })
    });
  });