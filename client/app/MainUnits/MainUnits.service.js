'use strict';

angular.module('twdbApp')
  .factory('MainUnits', function (Api, UnitsToGroupingsMilitaryPermissions, LandUnits, MeleeWeapons, UnitArmourTypes, UnitShieldTypes, LocLandUnits) {
    var _list = [];

    var MainUnits = {
      get: function(){
        return Api.mainUnits.query(function(res) {
          _list = res.map(function(unit){
            unit.lu = LandUnits.byKey(unit.land_unit);
            unit.weaponType = MeleeWeapons.byKey(unit.lu.primary_melee_weapon);
            unit.armourType= UnitArmourTypes.byKey(unit.lu.armour);
            unit.shieldType = UnitShieldTypes.byKey(unit.lu.shield);

            unit.armourTotal = unit.armourType.armour_value + unit.shieldType.shield_armour_value;
            unit.defenceTotal = unit.lu.melee_defence + unit.shieldType.shield_defence_value;
            unit.weaponTotal = unit.weaponType.damage + unit.weaponType.ap_damage;

            unit.loc = {
              landUnit : LocLandUnits.loc(unit.land_unit)
            };
            return unit;
          });
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
      byMg: function(mg){
        var unitKeys = UnitsToGroupingsMilitaryPermissions.UnitsByMg(mg);
        var units = [];
        _list.forEach(function(unit){
          unitKeys.some(function(unitKey){
            if(unit.unit === unitKey){
              units.push(unit);
              return true;
            }
          })
        });
        return units;
      },
      byFaction: function(faction){

      }
    };

    return MainUnits;
  });