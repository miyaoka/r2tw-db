'use strict';

angular.module('twdbApp')
  .factory('LocFactions', function (Api) {
    var _dict = {};
    var Locs = {
      get: function(){
        return Api.locFactions.query(function(res) {
          _dict = {};
          res.forEach(function(item){
            _dict[item.key] = item.loc;
          });
        });
      },
      loc:function(key){
        return _dict['factions_screen_name_' + key];
      }
    };

    return Locs;
  });