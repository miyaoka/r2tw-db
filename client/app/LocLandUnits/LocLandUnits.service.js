'use strict';

angular.module('twdbApp')
  .factory('LocLandUnits', function (Api) {
    var _dict = {};


    var LandUnits = {
      get: function(){
        return Api.locLandUnits.query(function(res) {
          _dict = {};
          res.forEach(function(item){
            _dict[item.key] = item.loc;
          });
        });
      },
      loc:function(key){
        return _dict['land_units_onscreen_name_' + key];
      }
    };

    return LandUnits;
  });