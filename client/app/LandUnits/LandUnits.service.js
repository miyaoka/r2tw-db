'use strict';

angular.module('twdbApp')
  .factory('LandUnits', function ($rootScope, Api) {
    var _list = [];


    var LandUnits = {
      get: function(){
        return Api.landUnits.query(function(res) {
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
      },
      byKey: function(key){
        var matched;
        _list.some(function(item){
          if(item.key === key){
            matched = item;
            return true;
          }
        });
        return matched;
      }
    };

    return LandUnits;
  });