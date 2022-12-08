(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

SignupController.$inject = ['user'];
function UserInfoController(user) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.favoriteCategoryShortName = $ctrl.user.favoriteItem.short_name.split(/(\d+)/)[0];
}

})();
