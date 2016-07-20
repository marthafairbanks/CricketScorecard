(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('MainController', function(API) {
       var vm = this;

       	//post game scores to api on submit button click
        vm.postGame = function postGame(){
        	console.log("hey");
        var postGame = API.postGame(vm.form);

        postGame.then(function(response) {
          console.log(response);

          vm.form = [];
        });
       };
      
    });
})();