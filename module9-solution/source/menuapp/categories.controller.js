(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);


  CategoriesController.$inject = ['categoryList'];
  function CategoriesController(categoryList) {
    var $ctrl = this;
    $ctrl.categoryList = categoryList;
  }

})();
