(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['user', 'validCategory'];
function SignupController(user, validCategory) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.validCategory = validCategory;
}

})();
