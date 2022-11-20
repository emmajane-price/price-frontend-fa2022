(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var ApiBasePath = "https://davids-restaurant.herokuapp.com";
  service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
  }
  service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      });
  }
}
})();
