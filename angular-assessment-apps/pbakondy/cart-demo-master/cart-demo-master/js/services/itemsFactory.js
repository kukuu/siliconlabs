function itemsFactory() {
  'use strict';

  // index: "uid"
  var items = [];
  items[1] = {
        'category': 'Women',
        'subcat': 'Clothing',
        'item': 'Party wear - Front Leather Panelled Ponte Treggings',
        'price': '159.00'
    };
  items[2] = {
        'category': 'Women',
        'subcat': 'Clothing',
        'item': 'Speziale Italian Cupro Draped Bodycon Dress',
        'price': '89.00'
    };
  items[3] = {
        'category': 'Beauty',
        'subcat': 'Skincare',
        'item': 'Aptiva - Wine Elixir Night Cream',
        'price': '79.00'
    };
  items[4] = {
        'category': 'Men',
        'subcat': 'Suits & Tailoring',
        'item': 'Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt',
        'price': '39.50'
    };
  items[5] = {
        'category': 'Men',
        'subcat': 'Jeans',
        'item': 'Big & Tall Washed Look Bootleg Denim Jeanst',
        'price': '25.00'
    };


  return {
    getItems: function() {
      return items;
    }
  };
}

angular.module('cart')
  .factory('itemsFactory', itemsFactory);
