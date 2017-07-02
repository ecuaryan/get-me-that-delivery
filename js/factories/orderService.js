app.factory('OrderService', function (CONFIG, $http) {
  var orderService = {};

  orderService.postOrder = function (order) {
    return $http
      .post(CONFIG.baseUrl + CONFIG.stagePath + CONFIG.orderUrl, order)
      .then(function (res) {
        return res;
      });
  };

  return orderService;
});
