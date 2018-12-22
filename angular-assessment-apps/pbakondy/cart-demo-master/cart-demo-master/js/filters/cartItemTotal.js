angular.module('cart')
  .filter('cartItemTotal', function() {
    'use strict';
    return function(input) {
      var quantity = input.map(function(item){ return parseInt(item.quantity, 10); })
        .reduce(function(prev, curr) { return prev + curr; }, 0);
      return quantity + (quantity > 1 ? ' pieces' : ' piece');
    };
  });
