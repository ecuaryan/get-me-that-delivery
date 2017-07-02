var app = angular.module('app', ['ngRoute', 'ngSanitize']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'templates/orderForm.html',
    controller: 'OrderController as vm'
  }).when('/frequently-asked-questions', {
    templateUrl: 'templates/faq.html'
  }).when('/about-us', {
    templateUrl: 'templates/about-us.html'
  }).when('/contact-us', {
    templateUrl: 'templates/contact-us.html',
    controller: 'ContactUsController as vm'
  });
});

app.constant('CONFIG', {
  baseUrl: 'https://2vv8rth4gd.execute-api.us-east-2.amazonaws.com',
  stage: '/prod',
  stateEndpoint: '/state',
  orderEndpoint: '/order',
  contactUsEndpoint: '/contact-us'
});
