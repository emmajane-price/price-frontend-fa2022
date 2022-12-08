(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.currentUser = null;

  service.checkIfItemExists = function (short_name) {
    var categoryItem = short_name.split(/(\d+)/);
    var category = categoryItem[0];
    var item = parseInt(categoryItem[1]) - 1;
    return $http({
        method: "GET",
        url: ApiPath + `/menu_items/${category}/menu_items/${item}.json`
      }).then(function (response) {
        return !(response.data == null);
      }).catch(function(error) {
        console.log(error);
      });
  };

  service.getUser = function () {
    return service.currentUser;
  };

  service.setUser = function (user) {
    service.currentUser = user;
  };

}



})();
