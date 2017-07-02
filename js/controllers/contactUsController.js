app.controller('ContactUsController',['$scope', 'ContactUsService', function($scope, ContactUsService){
  var vm = this;

  vm.postMessage = function(message){
    ContactUsService.postMessage(message).then(function(result){
      console.log(result);
    });
  };
}]);
