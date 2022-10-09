(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.outputMessage = "";

  $scope.checkIfTooMuch = function(food) {
    var foodList = food.split('');
    if (foodList.length === 0) {
      $scope.outputMessage = "Please enter data first";
    } else if (foodList.length <= 3) {
      $scope.outputMessage = "Enjoy!";
    } else {
      $scope.outputMessage = "Too much!";
    }
  }
}

})();
