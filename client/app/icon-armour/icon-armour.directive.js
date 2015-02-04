'use strict';

angular.module('twdbApp')
  .directive('iconArmour', function () {
    var icons = {
      'body': 'null.png',
      'cloth' : 'A_Clothing01.png',
      'leather' : 'A_Clothing02.png',
      'chainmail' : 'A_Armor04.png',
      'segmented': 'A_Armour02.png',
      'bronze' : 'A_Armour03.png'
    };
    return {
      templateUrl: 'app/icon-armour/icon-armour.html',
      restrict: 'E',
      replace: true,
      scope: {
        'armour' : '='
      },
      link: function (scope, element, attrs) {
        scope.icon = icons[scope.armour.audio_material];

        var tooptips = [ scope.armour.key, '--------'];
        'armour_value bonus_vs_missiles weak_v_missiles audio_material'.split(' ').forEach(function(key){
          tooptips.push(key + ': ' + scope.armour[key]);
        });
        scope.htmlTooltip = tooptips.join('<br>');
      }
    };
  });