(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('registerLoginController', function(API, localStore, $state) {
      
      var vm = this;
      vm.showAlert = false;

      //shows the register/login page if theres no token in local storage
      vm.showRegisterLogin = function() {
        if (localStore.getToken() !== null) {
          return false;
        }
        else {          
          return true;
        }
      };  

      //shows the profile page if there is a token in local storage
      vm.showProfile = function() {
        if (localStore.getToken() === null) {
          return false;
        }
        else {
          return true;
        }
      };
    
      //submits the registration form to backand api and writes the token and 
      //id to local storage
      vm.submitRegister = function() {
          var register = API.registerUser(vm.form);

          register.then(function(results){
            localStore.saveToken(results.config.data.token);
            localStore.saveUserId(results.data.__metadata.id);
            vm.showProfile();
            vm.showRegisterLogin();
          });
       };
      
      //checks the login form info against whats in the api and adds
      //the token and user id to local storage
      vm.submitLogin = function(){
        var login = API.loginUser(vm.form);

        login.then(function(results){
          console.log(results);
          if(results.data.data[0])
          {
            localStore.saveToken(results.data.data[0].token);
            localStore.saveUserId(results.data.data[0].id);
            vm.showAlert = false;
            vm.showProfile();
            vm.showRegisterLogin();
          }
          else
          {
            vm.showAlert = true;
          }
        });
       };       
      
    });
})();