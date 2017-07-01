app.controller('orderController',['$scope', 'StoreService', function($scope, StoreService){
  var vm = this;
  vm.storeState = {storeOpen: true};
  StoreService.getStoreState().then(function(storeState){
    vm.storeState = storeState;
  });
}]);
