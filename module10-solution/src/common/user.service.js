(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.currentUser = null;

  service.getIfItemExists = function (short_name) {
    return service.getItemFromServer(short_name)
      .then((response) => {
        return response.data != null;
      });
  };

  service.getCurrentUsersItem = function () {
    if (service.currentUser != null && service.currentUser.short_name != null) {
      return service.getItemFromServer(service.currentUser.short_name)
        .then((response) => {
          return response.data;
        });
    } else {
      return null;
    }
  };

  service.getItemFromServer = function(short_name) {
    var categoryItem = short_name.split(/(\d+)/);
    var category = angular.uppercase(categoryItem[0]);
    var item = parseInt(categoryItem[1]) - 1;
    return $http.get(ApiPath + `/menu_items/${category}/menu_items/${item}.json`);
  }

  service.getUser = function () {
    return service.currentUser;
  };

  service.setUser = function (user) {
    service.currentUser = user;
  };
}

})();
