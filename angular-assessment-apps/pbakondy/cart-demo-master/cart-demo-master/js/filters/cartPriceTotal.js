angular.module('cart')
  .filter('cartPriceTotal', function() {
    'use strict';
    return function(input, items) {
      return input.map(function(item){ return parseInt(item.quantity, 10) * items[item.uid].price; })
        .reduce(function(prev, curr) { return prev + curr; }, 0);
    };
  });
