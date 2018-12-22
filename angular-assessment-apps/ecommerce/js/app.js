(function(){

    'use strict';

    var shopApp = angular.module('MandS', []).
      config(['$routeProvider', function($routeProvider) {
      $routeProvider.
          when('/shop', {
              templateUrl: 'partials/shop.html',
              controller: shopController 
          }).
          when('/basket', {
              templateUrl: 'partials/basket.html',
              controller: shopController
          }).
          otherwise({
              redirectTo: '/shop'
          });
    }]);

    /**
        create a data service which provides a shop and shopping basket that
        will be shared by all views (instead of creating fresh ones for each view).
    **/
    shopApp.factory("DataService", function ($http) {

        //create shop
        var myShop = new shop($http);

        //create shopping basket
        var myBasket = new basket("MarksAndSpencerShop");

        //return data object with shop and basket
        return {
            shop: myShop,
            basket: myBasket
        };
        
    });

})();