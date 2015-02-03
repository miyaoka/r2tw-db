'use strict';

angular.module('twdbApp')
  .directive('weaponIcon', function () {
    var icons = {
      'spear' : 'W_Spear001.png',
      'club' : 'W_Mace001.png',
      'axe' : 'W_Axe001.png',
      'sword' : 'W_Dagger002.png',
      'falx' : 'W_Dagger003.png',
      'sword_long' : 'W_Sword001.png'
    };
    return {
      template: '<div ng-include="templateUrl()"></div>',
      restrict: 'EA',
      scope: {
        'weapon' : '='
      },
      link: function (scope, element, attrs) {
        scope.icon = icons[scope.weapon.audio_material];

        var tooptips = ['[ ' + scope.weapon.key + ' ]'];
        'bonus_v_cavalry bonus_v_elephants bonus_v_infantry armour_penetrating armour_piercing shield_piercing weapon_length audio_material'.split(' ').forEach(function(key){
          tooptips.push(key + ': ' + scope.weapon[key]);
        });
        scope.htmlTooltip = tooptips.join('<br>');
        scope.templateUrl = function(){
          return scope.icon ? 'app/weapon-icon/weapon-icon.html' : null
        }
      }
    };
  });