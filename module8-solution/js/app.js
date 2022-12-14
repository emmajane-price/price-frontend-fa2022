(function () {
'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController )
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItems() {
    var ddo = {
        templateUrl: 'foundItems.html',
        restrict: "E",
        scope: {
            foundItems: '<',
            onRemove: '&'
        }
    };
    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;
    narrowItDown.found = undefined;
    narrowItDown.searchTerm = "";

    narrowItDown.getMatchedMenuItems = function() {
        var matchedItems = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

        matchedItems.then(function(response) {
            narrowItDown.found = response;
        }).catch(function(error) {
            console.log(error);
        });
    }

    narrowItDown.removeItem = function (itemIndex) {
        (narrowItDown.found).splice(itemIndex, 1);
    };
    
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function(response) {
            var allItems = response.data.menu_items;
            var foundItems = (searchTerm.trim() === "") ? [] :
                allItems.filter((item) => (item.description).indexOf(searchTerm) != -1);
            return foundItems;
        }).catch(function(error) {
            console.log(error);
        });
    }
}

})();