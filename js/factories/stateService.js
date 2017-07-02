app.factory('StateService', function (CONFIG, $http, StoreState) {
  var stateService = {};

  stateService.getStoreState = function () {
    return $http
      .get(CONFIG.baseUrl + CONFIG.stagePath + CONFIG.stateUrl)
      .then(function (res) {
        StoreState.create(res.data.storeState);
        return res.data.storeState;
      });
  };

  return stateService;
});
