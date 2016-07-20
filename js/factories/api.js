(function () {
	'use strict';
	angular
		.module('cricketScorecard')
		 .factory('API', function($http, Backand) {

		 	var postGame = function(data){
		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/games',
				});
		 	};

		 
		 });
})();