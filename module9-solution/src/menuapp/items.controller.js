(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);


  ItemsController.$inject = ['category_info'];
  function ItemsController(categoryInfo) {
    var $ctrl = this;
    $ctrl.items = categoryInfo.menu_items;
    $ctrl.category = categoryInfo.category;
  }

})(); 
