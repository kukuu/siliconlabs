'use strict';

//shopController contains two objects:
// - shop: contains the product list
// - basket: the shopping basket object
function shopController($scope, $routeParams, DataService) {

    //get shop and cart from service
    $scope.shop = DataService.shop;
    $scope.basket = DataService.basket;

    // use routing to pick the selected product
    /*
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
    */
}
