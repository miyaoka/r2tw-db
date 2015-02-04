'use strict';

angular.module('twdbApp')
  .directive('iconWeapon', function () {
    var icons = {
      'spear' : 'W_Spear001.png',
      'club' : 'W_Mace001.png',
      'axe' : 'W_Axe001.png',
      'sword' : 'W_Dagger002.png',
      'falx' : 'W_Dagger003.png',
      'sword_long' : 'W_Sword001.png'
    };
    return {
      templateUrl: 'app/icon-weapon/icon-weapon.html',
      restrict: 'E',
      replace: true,
      scope: {
        'weapon' : '='
      },
      link: function (scope, element, attrs) {
        scope.icon = icons[scope.weapon.audio_material];

        var tooptips = [scope.weapon.key, '--------'];
        'damage ap_damage first_strike bonus_v_cavalry bonus_v_elephants bonus_v_infantry armour_penetrating armour_piercing shield_piercing weapon_length audio_material'.split(' ').forEach(function(key){
          tooptips.push(key + ': ' + scope.weapon[key]);
        });
        scope.htmlTooltip = tooptips.join('<br>');
      }
    };
  });