app.factory('StoreService', function (CONFIG, $http, StoreState) {
  var storeService = {};

  storeService.getStoreState = function () {
    return $http
      .get(CONFIG.storeStateUrl)
      .then(function (res) {
        StoreState.create(res.data);
        return res.data.storeState;
      });
  };

  return storeService;
});
