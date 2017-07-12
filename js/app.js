var app = angular.module('app', ['ngRoute', 'ngSanitize']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'templates/orderForm.html',
    controller: 'OrderController as vm'
  }).when('/how-it-works', {
    templateUrl: 'templates/how-it-works.html'
  }).when('/frequently-asked-questions', {
    templateUrl: 'templates/faq.html',
    controller: 'FaqController as vm'
  }).when('/contact-us', {
    templateUrl: 'templates/contact-us.html',
    controller: 'ContactUsController as vm'
  }).when('/terms-of-service', {
    templateUrl: 'templates/terms-of-service.html'
  });
});

app.constant('CONFIG', {
  feeAmount: 7,
  mainPhoneNumber: '425-835-1666',
  baseUrl: 'https://2vv8rth4gd.execute-api.us-east-2.amazonaws.com',
  stage: '/prod',
  stateEndpoint: '/state',
  orderEndpoint: '/order',
  contactUsEndpoint: '/contact-us'
});
