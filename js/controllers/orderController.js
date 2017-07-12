app.controller('OrderController',['$scope', 'CONFIG', 'StateService', 'OrderService', function($scope, CONFIG, StateService, OrderService){
  var vm = this;
  vm.feeAmount = CONFIG.feeAmount;

  vm.storeState = {storeOpen: true};
  StateService.getStoreState().then(function(storeState){
    vm.storeState = storeState;
  });

  vm.postOrder = function(order){
    OrderService.postOrder(order).then(function(result){
      console.log(result);
    });
  };
}]);