(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('loginController', function(API, localStore, $state) {
      var vm = this;

      vm.showAlert = false;

      vm.submit = function(){
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