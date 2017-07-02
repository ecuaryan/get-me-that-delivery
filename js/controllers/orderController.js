app.controller('OrderController',['$scope', 'StateService', 'OrderService', function($scope, StateService, OrderService){
  var vm = this;

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
