(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('registerController', function(API, localStore, $state) {
       var vm = this;


       vm.submit = function(){
          var register = API.registerUser(vm.form);

          register.then(function(results){
            localStore.saveToken(results.config.data.token);
            localStore.saveUserId(results.data.__metadata.id);
            // $state.go('admin');
          });
       };
      
    });
})();