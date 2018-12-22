function cartFactory() {
  'use strict';

  var items = [
    {
        'quantity': 6,
        'uid': 1
    },
    {
        'quantity': 3,
        'uid': 2
    },
    {
        'quantity': 2,
        'uid': 3
    },
    {
        'quantity': 10,
        'uid': 4
    },
    {
        'quantity': 1,
        'uid': 5
    }
  ];

  return {
    getItems: function() {
      return items;
    }
  };
}

angular.module('cart')
  .factory('cartFactory', cartFactory);
