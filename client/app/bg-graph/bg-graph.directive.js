'use strict';

angular.module('twdbApp')
  .directive('bgGraph', function () {
    return {
      templateUrl: 'app/bg-graph/bg-graph.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope :{
        'min': '=',
        'max': '=',
        'items': '=',
        'color': '@'
      },
      link: function (scope, element, attrs) {
        var span = scope.max - scope.min;
        var percent = 0;
        var gradients = ['-webkit-gradient(linear, left top, right top'];
        scope.items.concat({value:0, color: 'rgba(0,0,0,0)'}).forEach(function(item){
          gradients.push('color-stop(' + percent + '%, ' + item.color + ')');
          percent += (item.value - scope.min) / span * 100;
          gradients.push('color-stop(' + percent + '%, ' + item.color + ')');
        });

        scope.style = {
          'background': gradients.join(', ')
        };
      }
    };
  });
