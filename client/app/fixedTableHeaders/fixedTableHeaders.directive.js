'use strict';

angular.module('twdbApp')
  .directive('fixedTableHeaders', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $timeout(function () {
          element.stickyTableHeaders();
        }, 0);
      }
    };
  });
