'use strict';

angular.module('twdbApp')
  .directive('graph', function () {
    return {
      templateUrl: 'app/graph/graph.html',
      restrict: 'EA',
      transclude: true,
      scope :{
        'min': '=',
        'max': '=',
        'value': '=',
        'color': '@'
      },
      link: function (scope, element, attrs) {
        scope.percent = (scope.value - scope.min) / (scope.max - scope.min) * 100;
      }
    };
  });