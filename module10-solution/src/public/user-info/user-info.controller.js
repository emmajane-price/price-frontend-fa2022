(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'categoryData'];
function UserInfoController(user, categoryData) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.categoryData = categoryData;
  $ctrl.favoriteCategoryShortName = $ctrl.categoryData !== null ? $ctrl.categoryData.short_name.split(/(\d+)/)[0] : '';
}

})();
