(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser;
  $ctrl.validCategory = false;

  $ctrl.submit = function(short_name) {
    $ctrl.validCategory = UserService.checkIfItemExists(short_name);
    if ($ctrl.validCategory) {
      UserService.setUser($ctrl.user);
    }
  }
}

})();
