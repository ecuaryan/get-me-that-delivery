app.service('StoreState', function () {
  this.create = function (storeState) {
    this.storeState = storeState;
  };
  this.destroy = function () {
    this.storeState = null;
  };
});
