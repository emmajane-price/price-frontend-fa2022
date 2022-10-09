(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.outputMessage = "";
  $scope.outputColor = "nothing";

  $scope.checkIfTooMuch = function(food) {
    // does not count empty values as an item
    var foodList = food.split(',').filter(x => x !== '' && x !== "");
    if (foodList.length === 0) {
      $scope.outputMessage = "Please enter data first";
      $scope.outputColor = "red";
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
