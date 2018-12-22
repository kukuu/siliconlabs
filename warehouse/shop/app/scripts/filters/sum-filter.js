/*
---
name: SumFilter
...
*/

	'use strict';

	var SumFilter = function() {
		return function(array, filter) {
			if(!filter){
				return array.reduce(function(prev, current) {
					return parseFloat(prev) + parseFloat(current);
				},0)
			}else {
				return array.reduce(function(prev, current) {
					return parseFloat(prev) + parseFloat(current[filter]);
				}, 0);
			}
		}
	};

	angular.module('myApp').filter('SumFilter', SumFilter);
