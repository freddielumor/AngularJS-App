// // Main app js
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
$routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })
  .when('/confirm', {
     templateUrl: 'views/confirm.html'
  })
  .when('/checkout', {
     templateUrl: 'views/checkout.html'
  })
  .when('/thankyou', {
     templateUrl: 'views/thankyou.html'
  });
  // $routeProvider.otherwise( { redirectTo: '/home' });
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}]);
