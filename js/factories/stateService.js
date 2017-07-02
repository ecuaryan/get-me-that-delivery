app.factory('StateService', function (CONFIG, $http, StoreState) {
  var stateService = {};

  stateService.getStoreState = function () {
    return $http
      .get(CONFIG.baseUrl + CONFIG.stage + CONFIG.stateEndpoint)
      .then(function (res) {
        StoreState.create(res.data.storeState);
        return res.data.storeState;
      });
  };

  return stateService;
});
