angular.module('cart')
  .directive('mycart', function() {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        items: '=',
        cart: '='
      },
      templateUrl: 'templates/cart.html',
      controller: 'CartController'
    };
  });
