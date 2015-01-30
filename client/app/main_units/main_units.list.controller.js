'use strict';

angular.module('twdbApp')
  .controller('MainUnitsListCtrl', function ($scope, $http, TableFactory) {

    $scope.mainUnitsTable = TableFactory({
      count: 25,
      filter: {
        is_naval: 'false'
      }
    });

    $http.get('/api/main_units').success(function(res) {
      $scope.mainUnitsTable.setItems(res);
    });
  });