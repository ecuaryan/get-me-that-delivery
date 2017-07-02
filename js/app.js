var app = angular.module('app', ['ngRoute', 'ngSanitize']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'templates/orderForm.html',
    controller: 'orderController as vm'
  }).when('/frequently-asked-questions', {
    templateUrl: 'templates/faq.html'
  }).when('/about-us', {
    templateUrl: 'templates/about-us.html'
  });
});

app.constant('CONFIG', {
  storeStateUrl: 'https://2vv8rth4gd.execute-api.us-east-2.amazonaws.com/prod/state'
});
