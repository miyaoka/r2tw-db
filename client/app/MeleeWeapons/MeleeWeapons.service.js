'use strict';

angular.module('twdbApp')
  .factory('MeleeWeapons', function (Api) {
    var _list = [];
    var Obj = {
      get: function(){
        return Api.meleeWeapons.query(function(res) {
          _list = res;
        });
      },
      get list() {
        return _list;
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

    return Obj;
  });
