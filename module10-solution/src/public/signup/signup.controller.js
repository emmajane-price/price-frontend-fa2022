(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  $ctrl.isValidShortName = undefined;

  $ctrl.saveUser = function() {
    UserService.setUser($ctrl.user);
  }

  $ctrl.checkIfItemExists = function(short_name) {
    if (short_name !== undefined){
      UserService.getIfItemExists(short_name).then((response) => {
        $ctrl.isValidShortName = response
      });
    } else {
      $ctrl.isValidShortName = undefined;
    }
  }
}

})();
