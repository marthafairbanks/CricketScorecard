(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('profileController', function(API, localStore, $state) {
      var vm = this;

      vm.showProfile = function() {
        if (localStore.getToken() === null) {
          return false;
        }
        else {
          return true;
          vm.userProfile = function () {
            API.getUserInfo();
          }  
        }
      };    

      //logs out the user by deleting their token in local storage
      vm.logout = function() {
        localStore.logout();
      };

      //post game scores to api on submit button click
      vm.postGame = function postGame(){

        if (vm.form.p1_name == null)  {
          vm.scores.p1_name = "Player 1";  
        }
        else {
          vm.scores.p1_name = vm.form.p1_name;
        } 

        if (vm.form.p2_name == null) {
          vm.scores.p2_name = "Player 2";  
        }
        else {
          vm.scores.p2_name = vm.form.p2_name;
        } 

      var postGame = API.postGame(vm.scores);

      postGame.then(function(response) {
        console.log(response);

        vm.scores.p1_20 = 0;
        vm.scores.p2_20 = 0;
        vm.scores.p1_19 = 0;
        vm.scores.p2_19 = 0;
        vm.scores.p1_18 = 0;
        vm.scores.p2_18 = 0;
        vm.scores.p1_17 = 0;
        vm.scores.p2_17 = 0;
        vm.scores.p1_16 = 0;
        vm.scores.p2_16 = 0;
        vm.scores.p1_15 = 0;
        vm.scores.p2_15 = 0;
        vm.scores.p1_bull = 0;
        vm.scores.p2_bull = 0;                   

      });
      };    


    });
})();