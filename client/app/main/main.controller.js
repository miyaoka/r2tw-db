'use strict';

angular.module('twdbApp')
  .controller('MainCtrl', function ($scope, $http, TableFactory) {


    $scope.awesomeThings = [];
    $scope.myItems = [];
    $scope.mainUnitsTable = TableFactory({
      count: 10,
      filter: {
        is_naval: 'false'
      }
    });
    $scope.landUnitsTable = TableFactory({
      count: 10,
    });

    $scope.showFields = 'unit land_unit num_men recruitment_cost upkeep_cost'.split(' ');

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/api/main_units').success(function(res) {
      $scope.mainUnitsTable.setItems(res);
    });
    $http.get('/api/land_units').success(function(res) {
      $scope.landUnitsTable.setItems(res);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
