app.controller('MainController',['$scope', 'CONFIG', function($scope, CONFIG){
  var vm = this;
  vm.facebookUrl = CONFIG.facebookUrl;
  vm.twitterUrl = CONFIG.twitterUrl;
  vm.instagramUrl = CONFIG.instagramUrl;
}]);
