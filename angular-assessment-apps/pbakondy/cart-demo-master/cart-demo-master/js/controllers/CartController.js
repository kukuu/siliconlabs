function CartController($scope, itemsFactory, cartFactory) {
  'use strict';

  $scope.items = itemsFactory.getItems();
  $scope.cart = cartFactory.getItems();
  $scope.remove = function(index) {
    $scope.cart.splice(index, 1);
  };

}



angular.module('cart')
  .controller('CartController', ['$scope', 'itemsFactory', 'cartFactory', CartController]);
