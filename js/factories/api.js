(function () {
	'use strict';
	angular
		.module('cricketScorecard')
		 .factory('API', function($http, Backand) {

		 	//posts game data to api when the save game button is clicked
		 	var postGame = function(data){
		 		console.log(data);
		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/games',
				});
		 	};

		 	//posts user data along with generated token to api when register
		 	//button is clicked
		 	var registerUser = function(data) {

		 		data.token = randomString(12, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/users',
				});
		 	};
		 	
		 	//creates a randomly generated token for the user used in api and 
		 	//local storage
		 	function randomString(length, chars) {
			    var result = '';
			    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			    return result;
			}

			//checks the user inputed email/password info against 
			//whats in the api
			var loginUser = function(data){

		        var array = [ 
		        {    
		        "fieldName": "email",    
		        "operator": "equals",    
		        "value": data.email,  
		        },
		        {    
		        "fieldName": "password",    
		        "operator": "equals",    
		        "value": data.password,  
		        }
		        ];

		        return $http ({
		          method: 'GET',
		          data:data,
		          url: Backand.getApiUrl() +"/1/objects/users",
		          params: {
		            filter: array,
		          }
		        });
		    };

		    var getUserInfo = function() {
		    	return $http ({
		        method: 'GET',
		        data:data,
		        url: Backand.getApiUrl() +"/1/objects/users",
		    });

		    };   		 	
		 	
		 	return {
		 		postGame: postGame,
		 		registerUser: registerUser,
		 		loginUser: loginUser,
		 		getUserInfo: getUserInfo,
                 
             };
		 
		 });
})();