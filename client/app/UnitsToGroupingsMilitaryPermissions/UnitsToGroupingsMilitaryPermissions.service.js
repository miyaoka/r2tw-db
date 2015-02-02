'use strict';

angular.module('twdbApp')
  .factory('UnitsToGroupingsMilitaryPermissions', function ($rootScope, Api) {
    var _list = [];

    var UM = {
      get: function(){
        return Api.unitsToGroupingsMilitaryPermissions.query(function(res) {
          _list = res;
        });
      },
      get list() {
        return _list;
      },
      MgByUnit: function(unit){
        var matches = [];
        _list.forEach(function(item){
          if(item.unit === unit){
            matches.push(item.military_group);
          }
        });
        return matches;
      },
      UnitsByMg: function(mg){
        var matches = [];
        _list.forEach(function(item){
          if(item.military_group === mg){
            matches.push(item.unit);
          }
        });
        return matches;
      },
    };

    return UM;
  });