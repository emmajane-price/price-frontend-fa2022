(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('tripleDollar', TripleDollarFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.errorItem;

    toBuy.buyItem = function(itemIndex) {
        if (ShoppingListCheckOffService.isWholeNumber(toBuy.items[itemIndex])) {
            ShoppingListCheckOffService.moveItem(itemIndex);
            toBuy.errorItem = undefined;
        } else {
            toBuy.errorItem = toBuy.items[itemIndex];
        }
    }
    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    
}

function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
        { name: "cookies", quantity: 10, pricePerItem: 3 },
        { name: "candy", quantity: 5, pricePerItem: 2 },
        { name: "soda", quantity: 1, pricePerItem: 2 },
        { name: "chips", quantity: 2, pricePerItem: 4 },
        { name: "sandwiches", quantity: 3, pricePerItem: 5 },
    ];
    var alreadyBoughtItems = [];

    service.moveItem = function(itemIndex) {
        var boughtItem = toBuyItems.splice(itemIndex, 1)[0];
        alreadyBoughtItems.push(boughtItem);
    }

    service.getToBuyItems = function () {
        return toBuyItems;
    }

    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    }

    service.isWholeNumber = function (item) {
        return (item.quantity % 1) == 0;
    }
}

function TripleDollarFilter() {    
  return function (input) {
    return "$$$" + parseFloat(input).toFixed(2) || "$$$";
  };
}

})();