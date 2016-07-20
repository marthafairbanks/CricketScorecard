(function() {
    'use strict';
    angular
        .module('cricketScorecard', ['ui.router','backand'])
        .config(function(BackandProvider, $stateProvider, $urlRouterProvider) {

	  	BackandProvider.setAppName('cricketscorecard');
      	BackandProvider.setSignUpToken('4ecbba9f-ea69-4dbf-b172-81db87d45235');
      	BackandProvider.setAnonymousToken('9e2d8e65-6e83-4163-bc40-8e171498c0a5');

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      }
		  },
	    });
	});
})();


