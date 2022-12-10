describe('signupController', function () {

  var userService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () { module('common'); });

  beforeEach(function () {
    inject(function (_$controller_, $injector) {
      userService = $injector.get('UserService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return true when server response is valid', function() {
    $httpBackend.when('GET', ApiPath + `/menu_items/C/menu_items/0.json`).respond({"short_name": "C1"});
    userService.getIfItemExists("C1").then((response) => {
      expect(response).toEqual(true);
    });
    $httpBackend.flush();
  });

  it('should return false when server response is null', function() {
    $httpBackend.when('GET', ApiPath + `/menu_items/X/menu_items/36.json`).respond(null);
    userService.getIfItemExists("X37").then((response) => {
      expect(response).toEqual(false);
    });
    $httpBackend.flush();
  });

});
