(function () {
	'use strict';
	angular
		.module('cricketScorecard')
		 .factory('localStore', function($http) {

		 	var saveUserId = function(userid) {
		 		localStorage.setItem('userID',userid);
		 	};

		 	var getUserId = function() {
		 		return localStorage.getItem('userID');
		 	};

		 	var logout = function() {
		 		localStorage.removeItem('userID');
		 		localStorage.removeItem('token');
		 		return true;
		 	};

		 	var saveToken = function(token) {
		 		localStorage.setItem('token',token);
		 	};

		 	var getToken = function() {
		 		return localStorage.getItem('token');
		 	};  		 	
		 	
		 	return {
		 		saveUserId: saveUserId,
		 		getUserId: getUserId,
		 		saveToken: saveToken,
		 		getToken: getToken,
		 		logout: logout,
                 
             };
		 
		 });
})();