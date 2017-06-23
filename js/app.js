var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainController as vm'
  }).when('/frequently-asked-questions', {
    templateUrl: 'templates/faq.html'
  }).when('/about-us', {
    templateUrl: 'templates/about-us.html'
  });
});
