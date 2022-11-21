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
  
    /* I know we were taught to route to components, but I saw that in new versions
    of ui-router this was available and it seemed much cleaner!*/
    // Category list page
    .state('categories', {
      url: '/categories',
      component: 'categories',
      resolve: {
        categoryList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
            .then(function(response) {
              return response.data;
            });
        }]
      }
    })
    // Items list page
    .state('items', {
      url: '/items/{categoryId}',
      component: 'items',
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
    