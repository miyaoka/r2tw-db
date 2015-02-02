'use strict';

angular.module('twdbApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'factions',
      'link': '/factions'
    },{
      'title': 'mercs',
      'link': '/mercs'
    },{
      'title': 'main units',
      'link': '/main_units/list'
    },{
      'title': 'land units',
      'link': '/land_units/list'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });