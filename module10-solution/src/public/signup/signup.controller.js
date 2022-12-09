(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  $ctrl.validCategory = undefined;

  $ctrl.setIsValidCategory = function (response) {
    $ctrl.validCategory = response.data != null;
  }

  $ctrl.saveUser = function(response) {
    if (response.data != null) {
      $ctrl.validCategory = true;
      $ctrl.user.favoriteItem = response.data;
      UserService.setUser($ctrl.user);
    } else {
      $ctrl.validCategory = false;
    }
  }

  $ctrl.checkIfItemExists = function(short_name, outcomeFunction) {
    UserService.checkIfItemExists(short_name).then(outcomeFunction);
  }
}

})();
