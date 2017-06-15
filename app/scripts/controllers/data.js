// // Data Controller
myApp.controller('DataController',['$scope','$http','$location',function($scope,$http,$location){
  
  $scope.selectedMovie = "";
  $scope.loaded = false;
  $scope.shipping = 2;
  $http.get('https://api.myjson.com/bins/2awhk').then(function(response){
  $scope.movies = response.data;
  $scope.loaded = true;
});
  $scope.buy = function(movie){
    $scope.status = "buy"
    $scope.selectedMovie = movie;
      $location.path('/confirm');
    };
  $scope.rent = function(movie){
    $scope.status = "rent"
    $scope.selectedMovie = movie;
      $location.path('/confirm');
  };
  $scope.checkout = function() {
    $location.path('/checkout');
  }
  $scope.pay = function(){
    $location.path('/thankyou')
  }
}]);