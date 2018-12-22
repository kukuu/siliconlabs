/*
---
name: ItemController
...
*/

	'use strict';

	var ItemController = function($routeParams, ProductsFactory, ShoppingBagFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.item = ProductsFactory.getItem(this.itemId);
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		/*
		 * Initialization
         */
		var _init = function() {
			ProductsFactory.get().then(_onRequestSuccess, _onRequestError);
		};

		this.addItem = function(item) {
			ShoppingBagFactory.addItem({
				name: item.item,
				category: item.category,
				subcat: item.subcat,
				price: item.price,
				uid: item.uid
			});
		};

		// get current product ID using $routeParams
		this.itemId = parseInt($routeParams.itemId);

		// set default model values
		this.errorMessage = false;
		this.item = {};
		
		_init();

	};

	angular.module('myApp').controller('ItemController', ['$routeParams', 'ProductsFactory', 'ShoppingBagFactory', ItemController]);


