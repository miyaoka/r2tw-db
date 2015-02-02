'use strict';

angular.module('twdbApp')
  .directive('armourIcon', function () {
    var icons = {
      'body': 'null.png',
      'cloth' : 'A_Clothing01.png',
      'leather' : 'A_Clothing02.png',
      'chainmail' : 'A_Armor04.png',
      'segmented': 'A_Armour02.png',
      'bronze' : 'A_Armour03.png'
    };
    return {
      template: '<div ng-include="templateUrl()"></div>',
      restrict: 'EA',
      scope: {
        'armour' : '='
      },
      link: function (scope, element, attrs) {
        scope.icon = icons[scope.armour.audio_material];
        scope.templateUrl = function(){
          return scope.icon ? 'app/armour-icon/armour-icon.html' : null
        }
      }
    };
  });