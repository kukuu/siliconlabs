/*
---
name: ShoppingBagFactory
...
*/
//(function (global, doc, undefined) {

  'use strict';

	var ShoppingBagFactory = function() {

		var ShoppingBagFactory = {};//initialise empty object

		ShoppingBagFactory.getItems = function() { //will be used again as flag when removing
			return ShoppingBagFactory.items;
		};

		ShoppingBagFactory.getItem = function(id) {
			for(var i = 0, l = ShoppingBagFactory.items.length; i<l; i++){
				if(ShoppingBagFactory.items[i].uid === id){
					return ShoppingBagFactory.items[i];
				}
			}
			return null;
		};

		ShoppingBagFactory.addItem = function(item) {
			ShoppingBagFactory.items.push(item);
		};

		ShoppingBagFactory.removeItem = function(id) {
			var _isItemPresent = ShoppingBagFactory.getItem(id);//check if item is present. Create a flag.
			if(_isItemPresent){
				ShoppingBagFactory.items.splice(ShoppingBagFactory.items.indexOf(_isItemPresent), 1);//chop of
			}
		};

		ShoppingBagFactory.items = [];//initialise empty array

		return ShoppingBagFactory;//returns properties and methods of the object built

	};

	angular.module('myApp').factory('ShoppingBagFactory', [ShoppingBagFactory]);

//})(window, document);