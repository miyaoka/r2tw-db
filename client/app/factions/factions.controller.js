'use strict';

angular.module('twdbApp')
  .controller('FactionsCtrl', function ($scope, $state, Api, TableFactory) {
    console.log("factions");
    $scope.$state = $state;
    $scope.factionsTable = TableFactory({
      count: 25,
      sorting: {
        screen_name: 'asc'
      },
      filter : function(item){
        return true;
        return item.is_rebel == "False" && item.key.match(/^pun/);
      }
    });

    Api.factions.query(function(res) {
      $scope.factionsTable.setItems(res);
    });
  });
