/*
---
name: ShoppingBagController
...
*/

	'use strict';

	var ShoppingBagController = function(ShoppingBagFactory) {

		// models 
		this.items = ShoppingBagFactory.getItems();

	};

	angular.module('myApp').controller('ShoppingBagController', ['ShoppingBagFactory', ShoppingBagController]);



