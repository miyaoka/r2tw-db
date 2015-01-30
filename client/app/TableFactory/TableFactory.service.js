'use strict';

angular.module('twdbApp')
  .factory('TableFactory', function ($filter, ngTableParams) {
    var Table = function(baseParameters) {
      var _items = [];
      var tp = new ngTableParams({
        count: 10         // count per page
      },{
        counts: [25, 50, 100, 1000], // 1ページあたりの表示件数（空配列で非表示）
        getData: function($defer, params) {
          params.total(_items.length);
          _items = (params.filter() ?
            $filter('filter')(_items, params.filter()) :
            _items
          );
          _items = (params.sorting() ?
            $filter('orderBy')(_items, params.orderBy()) :
            _items
          );

          $defer.resolve(
            _items.slice(
              (params.page() - 1) * params.count(), params.page() * params.count()
            )
          );
        },
        $scope: {
          $data: {}
        }
      });
      tp.parameters(baseParameters, false);
      tp.setItems = function(items){
        _items = items;
        tp.reload();
      };
      return tp;
    };

    return Table;
  });
