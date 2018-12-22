/*
---
name: ProductsController
...
*/

	'use strict';

	var ProductsController = function(ProductsFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.products = ProductsFactory.products;//products model. we can retrieve the length on this for the view
			this.categories = ProductsFactory.getCategories();//categories model. we can retrieve the length on it from here for the view.
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		/*
		 * Initialization. 
		 */
		var _init = function() {
			ProductsFactory.get().then(_onRequestSuccess, _onRequestError);
		};

		// Provide data for Initializing from the API above (models)
		this.products = [];//Array
		this.categories = [];//Array
		this.errorMessage = false;

		_init();

	};

	angular.module('myApp').controller('ProductsController', ['ProductsFactory', ProductsController]);



