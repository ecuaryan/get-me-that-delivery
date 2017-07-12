app.controller('FaqController',['$scope', 'CONFIG', function($scope, CONFIG){
  var vm = this;
  vm.feeAmount = CONFIG.feeAmount;
}]);
