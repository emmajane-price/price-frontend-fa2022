(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);


  ItemsController.$inject = ['category_info'];
  function ItemsController(category_info) {
    var $ctrl = this;
    $ctrl.items = category_info.menu_items;
    $ctrl.category = category_info.category;
  }

})(); 
