var app = angular.module('calculatrice', []);

app.controller('calculatriceController', function($scope){
  $scope.buttons = ['7', '8', '9', '/','4','5','6','*','1','2','3','-','0','.','=','+'];

  $scope.calcValue = '0';
  $scope.shouldBeCleared = true;

  $scope.addToCalc = function(string){
    if($scope.shouldBeCleared){
      $scope.calcValue = ''
      $scope.shouldBeCleared = false;
    }
    if(string == '='){
      return $scope.calculate();
    }
    $scope.calcValue += string;
  }

  $scope.calculate = function(){
    if(!$scope.calcValue){
      $scope.calcValue = 0;
      return;
    }
    $scope.calcValue = eval($scope.calcValue).toString();
    $scope.shouldBeCleared = true;
  }
});