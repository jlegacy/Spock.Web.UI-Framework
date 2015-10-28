describe("Test AJAX Users", function () {

	beforeEach(function () {

		jasmine.Ajax.install();
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
		jasmine.clock().uninstall();
	});

	it("expected user proper endpoint", function () {
		var doneFN = jasmine.createSpy("success");

		var obj = {};
		var callback = {};

		$User.List(obj, callback);
		expect(jasmine.Ajax.requests.mostRecent().url).toMatch($App.WebServiceRoot + '/api/Accounts');
	});

	it("expected get users ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.GetUsers(callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected get users ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.GetUsers('');

		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected update user ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.UpdateUser('', '', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected update user ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.UpdateUser('', '', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected delete user ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.DeleteUser('', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected delete user ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.DeleteUser('', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected create user ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.CreateUser('', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected create user ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.CreateUser('', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected change password ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.UserChangePassword('', '', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected change password ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.UserChangePassword('', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected reset password ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.ResetPassword('', '', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected reset password ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.ResetPassword('', '');

		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});
	
	it("expected get token ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.GetToken('', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected get token ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.GetToken('', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

});
