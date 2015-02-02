'use strict';

angular.module('twdbApp')
  .factory('TableFactory', function ($filter, ngTableParams) {
    var Table = function(baseParameters) {
      var _items = [];
      var _filteredItems = [];
      var tp = new ngTableParams({
        count: 10         // count per page
      },{
        counts: [], // 1ページあたりの表示件数（空配列で非表示）
        getData: function($defer, params) {
          _filteredItems = (params.filter() ?
            $filter('filter')(_items, params.filter()) :
            _items
          );
          _filteredItems = (params.sorting() ?
            $filter('orderBy')(_filteredItems, params.orderBy()) :
            _filteredItems
          );

          $defer.resolve(
            _filteredItems.slice(
              (params.page() - 1) * params.count(), params.page() * params.count()
            )
          );
          params.total(_filteredItems.length);
        },
        $scope: {
          $data: {}
        }
      });
      tp.parameters(baseParameters, false);
      tp.setItems = function(items){
        _items = items;
        tp.page(1);
        tp.reload();
      };
      return tp;
    };

    return Table;
  });
