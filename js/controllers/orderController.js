app.controller('OrderController',['$scope', 'CONFIG', 'StateService', 'OrderService', function($scope, CONFIG, StateService, OrderService){
  var vm = this;
  vm.feeAmount = CONFIG.feeAmount;

  vm.storeState = {storeOpen: true};
  StateService.getStoreState().then(function(storeState){
    vm.orderFormBusy = !storeState.storeOpen;
    vm.orderFormOverlayHtml = storeState.closedMessageHtml;
  });

  vm.postOrder = function(){
    vm.orderFormBusy = true;
    vm.orderFormOverlayHtml = 'submitting order...';
    OrderService.postOrder(vm.order).then(function(result){
      vm.order = null;
      vm.orderFormBusy = false;
      vm.orderFormOverlayHtml = null;
      iqwerty.toast.Toast("Thanks for your order! A runner will send you a text shortly and coordinate your delivery.", {
        settings: {
          duration: 10000
        }
      });
      console.log(result);
    }, function(error){
      vm.orderFormBusy = false;
      vm.orderFormOverlayHtml = null;
      iqwerty.toast.Toast("An error has occurred, please try again.", {
        settings: {
          duration: 50000
        }
      });
      console.error(error);
    });
  };
}]);
