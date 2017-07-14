app.factory('OrderService', function (CONFIG, $http) {
  var orderService = {};

  orderService.postOrder = function (order) {
    return $http
      .post(CONFIG.baseUrl + CONFIG.stage + CONFIG.orderEndpoint, order)
      .then(function (res) {
        return res;
      }, function (error){
        return error;
      });
  };

  return orderService;
});
