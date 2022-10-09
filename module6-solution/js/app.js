(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.outputMessage = "";
  $scope.outputColor = "red";

  $scope.checkIfTooMuch = function(food) {
    var foodList = food.split(',').filter(x => x !== '');
    if (foodList.length === 0) {
      $scope.outputMessage = "Please enter data first";
    } else if (foodList.length <= 3) {
      $scope.outputMessage = "Enjoy!";
      $scope.outputColor = "green";
    } else {
      $scope.outputMessage = "Too much!";
      $scope.outputColor = "green";
    }
  }
}

})();
