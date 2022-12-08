(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  $ctrl.validCategory = false;

  $ctrl.submit = function(short_name) {
    UserService.checkIfItemExists(short_name)
      .then(function (response) {
        if (response.data != null) {
          $ctrl.validCategory = true;
          $ctrl.user.favoriteItem = response.data;
          UserService.setUser($ctrl.user);
        } else {
          $ctrl.validCategory = false;
        }
      }).catch(function(error) {
        console.log(error);
      });
  }
}

})();
