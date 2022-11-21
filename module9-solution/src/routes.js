(function () {
  'use strict';
  
  angular.module('MenuApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');
  
    // *** Set up UI states ***
    $stateProvider
  
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
  
    // Premade list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        categoryList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
            .then(function(response) {
              return response.data;
            });
        }]
      }
    })
    
    .state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'ItemsController as items',
      resolve: {
        categoryInfo: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryId)
            .then(function(response) {
              return response.data;
            });
        }]
      }
    });
  }
    
})();
    