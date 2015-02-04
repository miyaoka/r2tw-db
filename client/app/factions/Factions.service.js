'use strict';

angular.module('twdbApp')
  .factory('Factions', function (Api, LocFactions) {
    var _list = [];


    var Factions = {
      get: function(){
        return Api.factions.query(function(res) {
          _list = res.map(function(item){
            console.log(item);
            item.loc = {
              key : LocFactions.loc(item.key)
            }
            return item;
          })
        });
      },
      get list() {
        return _list;
      },
      byId: function(id){
        var matched;
        _list.some(function(item){
          if(item._id === id){
            matched = item;
            return true;
          }
        });
        return matched;

      }
    };

    return Factions;
  });
