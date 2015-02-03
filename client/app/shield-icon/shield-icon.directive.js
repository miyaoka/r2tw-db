'use strict';

angular.module('twdbApp')
  .directive('shieldIcon', function () {
    var icons = {
      'body': 'null.png',
      'wicker': 'E_Wood01.png',
      'wood': 'E_Wood02.png',
      'bronze': 'E_Metal01.png'
    };
    return {
      template: '<div ng-include="templateUrl()"></div>',
      restrict: 'EA',
      scope: {
        'shield' : '='
      },
      link: function (scope, element, attrs) {
        scope.icon = icons[scope.shield.audio_material];

        var tooptips = ['[ ' + scope.shield.key + ' ]'];
        'shield_armour_value shield_defence_value audio_material'.split(' ').forEach(function(key){
          tooptips.push(key + ': ' + scope.shield[key]);
        });
        scope.htmlTooltip = tooptips.join('<br>');

        scope.templateUrl = function(){
          return scope.icon ? 'app/shield-icon/shield-icon.html' : null
        }
      }
    };
  });