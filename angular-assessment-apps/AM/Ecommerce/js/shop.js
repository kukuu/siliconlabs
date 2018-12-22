function shop($http) {

    this.products = [];
    var shop = this;

    //get the products from JSON file
    $http.get('products.json').
      success(function(data, status, headers, config) {
          shop.products = data.products;
      }).
      error(function(data, status, headers, config) {
          //do some error handling stuff
      });

}