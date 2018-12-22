/*
---
name: ShoppingListController
...
*/

	'use strict';

	var ShoppingListController = function(ShoppingBagFactory) {

		// methods
		this.removeItem = ShoppingBagFactory.removeItem;

		// models 
		this.items = ShoppingBagFactory.getItems();

	};

	angular.module('myApp').controller('ShoppingListController', ['ShoppingBagFactory', ShoppingListController]);


