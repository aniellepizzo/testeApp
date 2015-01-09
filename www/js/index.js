var app = angular.module('myApp', ['ionic']);
app.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

});

