app.factory('ContactUsService', function (CONFIG, $http) {
  var contactUsService = {};

  contactUsService.postMessage = function (message) {
    return $http
      .post(CONFIG.baseUrl + CONFIG.stage + CONFIG.contactUsEndpoint, message)
      .then(function (res) {
        return res;
      });
  };

  return contactUsService;
});
