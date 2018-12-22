/*
---
name: CategoryFilter
...
*/
//(function (global, doc, undefined) {

	'use strict';

	var CategoryFilter = function() {
		return function(products, category) {

			var _filtered = [];

			if(!category){
				return products;
			}

			angular.forEach(products, function(product){
				if(product.category && product.category === category){
					_filtered.push(product);
				}
			});

			return _filtered;

		}
	};

	angular.module('myApp').filter('CategoryFilter', CategoryFilter);

//})(window, document);