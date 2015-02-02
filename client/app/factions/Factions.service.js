'use strict';

angular.module('twdbApp')
  .factory('Factions', function ($rootScope, Api) {
    var _list = [];


    var Factions = {
      get: function(){
        return Api.factions.query(function(res) {
          _list = res;
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
