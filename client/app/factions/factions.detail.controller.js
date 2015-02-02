'use strict';

angular.module('twdbApp')
  .controller('FactionsDetailCtrl', function ($scope, $stateParams, Factions, MainUnits, TableFactory) {
    console.log("factions.detail", $stateParams.id);


    $scope.filter = {
      inf_ranged: true,
      inf_melee: true,
      cavalry: true,
      elephants: true,
      artillery: false,
      naval: false
    };
    //table settings
    $scope.unitsTable = TableFactory({
      count: 50,
      sorting: {
        'is_naval': 'asc',
        'lu.category': 'desc',
        'lu.class': 'asc',
        'recruitment_cost': 'asc'
      },
      filter: function(item){
        if(!item.lu){
          return true;
        }
        return ($scope.filter.naval ? item.is_naval === 'True' : item.is_naval === 'False' )
        && (
          ($scope.filter.inf_ranged ? item.lu.category === 'inf_ranged' : false)
          || ($scope.filter.inf_melee ? item.lu.category === 'inf_melee' : false)
          || ($scope.filter.cavalry ? item.lu.category === 'cavalry' : false)
          || ($scope.filter.elephants ? item.lu.category === 'elephants' : false)
          || ($scope.filter.artillery ? item.lu.category === 'artillery' : false)
        )
      }

    });
    $scope.unitsTable.settings().$scope = $scope;

   //apply filter when filter input changed
    for(var filterKey in $scope.filter){
      $scope.$watch("filter." + filterKey, function(val){
        $scope.unitsTable.reload();
        $scope.unitsTable.page(1);
      });
    }

      $scope.faction = Factions.byId($stateParams.id);
      if($scope.faction){
        $scope.unitsTable.setItems( MainUnits.byMg($scope.faction.military_group));
      }
  });
