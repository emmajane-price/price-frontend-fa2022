(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.currentUser = null;

  service.checkIfItemExists = function (short_name) {
    var category = short_name.split(/([a-zA-Z]+)/);
    var item = short_name.split(/(\d+)/);
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
