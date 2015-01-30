'use strict';

angular.module('twdbApp')
  .controller('LandUnitsListCtrl', function ($scope, $http, TableFactory) {
    $scope.landUnitsTable = TableFactory({
      count: 25,
      sorting: {
        category: 'asc',
        class: 'asc',
        key: 'asc'
      }
    });

    $http.get('/api/land_units').success(function(res) {
      $scope.landUnitsTable.setItems(res);
    });

  });
