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
    return $http.get(ApiPath + `/menu_items/${category}/menu_items/${item}.json`)
      .then(function (response) {
        return !(response.data == null);
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
