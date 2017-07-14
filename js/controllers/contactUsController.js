app.controller('ContactUsController',['$scope', 'ContactUsService', function($scope, ContactUsService){
  var vm = this;

  vm.postMessage = function(){
    vm.contactFormBusy = true;
    vm.contactFormOverlayHtml = "sending message..."

    ContactUsService.postMessage(vm.message)
    .then(function(result){
      vm.message = null;
      vm.contactFormBusy = false;
      vm.contactFormOverlayHtml = null;
      iqwerty.toast.Toast("Message sent!");
      console.log(result);
    }, function(error){
      vm.contactFormBusy = false;
      vm.contactFormOverlayHtml = null;
      iqwerty.toast.Toast("An error has occurred, please try again.", {
        settings: {
          duration: 50000
        }
      });
      console.error(error);
    });
  };
}]);
