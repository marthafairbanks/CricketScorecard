(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('registerLoginController', function(API, localStore, $state) {
      var vm = this;
      vm.showAlert = false;


      vm.submitRegister = function(){
          var register = API.registerUser(vm.form);

          register.then(function(results){
            localStore.saveToken(results.config.data.token);
            localStore.saveUserId(results.data.__metadata.id);
            // $state.go('admin');
          });
       };
      
      vm.submitLogin = function(){
        var login = API.loginUser(vm.form);

        login.then(function(results){
          console.log(results);
          if(results.data.data[0])
          {
            localStore.saveToken(results.data.data[0].token);
            localStore.saveUserId(results.data.data[0].id);
            vm.showAlert = false;
            // $state.go('admin');
          }
          else
          {
            vm.showAlert = true;
          }
        });
       };       
      
    });
})();