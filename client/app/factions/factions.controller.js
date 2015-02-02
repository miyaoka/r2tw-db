'use strict';

angular.module('twdbApp')
  .controller('FactionsCtrl', function ($scope, $state, $stateParams, Api, TableFactory, Factions) {
    console.log("factions");

    $scope.campains = [
      {
        key: 'rom',
        label: 'Grand Campain'
      },
      {
        key: 'pro',
        label: 'Prologue Campaign'
      },
      {
        key: 'gaul',
        label: 'Caesar In Gaul'
      },
      {
        key: 'pun',
        label: 'Hannibal at the Gates'
      },
      {
        key: 'emp',
        label: 'Imperator Augustus'
      },
      {
        key: 'pel',
        label: 'Wrath of Sparta'
      },
    ];
    $scope.filter = {
      key: null,
      screenName: '',
      militaryGroup: '',
      subculture: '',
      diplomacyCulture: '',
      showRebel: false,
      showCivilWar: false
    };
//    $scope.filter = $stateParams;
    function uniqueVals(ary, key){
      var dict = {};
      var vals = [];
      ary.forEach(function(item){
        dict[item[key]] = true;
      });
      for(var val in dict){
        vals.push(val);
      }
      return vals.sort(function(strA, strB) {
        return strA.toLowerCase().localeCompare(strB.toLowerCase());
      });
    }
    $scope.$state = $state;
    $scope.isCollapsed = !$state.is('main.factions')

    //table settings
    $scope.factionsTable = TableFactory({
      count: 10,
      sorting: {
        screen_name: 'asc'
      },
      filter: function(item){
        return ($scope.filter.key == null ? true : item.key.match(RegExp('^' + $scope.filter.key + '_')))
        && item.screen_name.match(new RegExp($scope.filter.screenName, 'i'))
        && item.military_group.match(new RegExp($scope.filter.militaryGroup, 'i'))
        && item.subculture.match(new RegExp($scope.filter.subculture, 'i'))
        && item.diplomacy_culture.match(new RegExp($scope.filter.diplomacyCulture, 'i'))
        && ($scope.filter.showRebel ? true : item.is_rebel === "False")
        && ($scope.filter.showCivilWar ? true : !item.key.match(/civil_war$/));
      }
    });
    $scope.factionsTable.settings().$scope = $scope;

    //apply filter when filter input changed
    for(var filterKey in $scope.filter){
      $scope.$watch("filter." + filterKey, function(val){
        $scope.factionsTable.reload();
        $scope.factionsTable.page(1);
      });
    }

    $scope.factionsTable.setItems(Factions.list);



  });
