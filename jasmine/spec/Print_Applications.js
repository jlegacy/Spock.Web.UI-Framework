describe("Test AJAX Print Applications", function () {

	beforeEach(function () {

		jasmine.Ajax.install();
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
		jasmine.clock().uninstall();
	});

	it("expected print application proper endpoint", function () {
		var doneFN = jasmine.createSpy("success");

		var obj = {};
		var callback = {};

		$User.List(obj, callback);
		expect(jasmine.Ajax.requests.mostRecent().url).toMatch($App.WebServiceRoot + '/api/PrintApplications');
	});

	it("expected get print applications ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.GetApplication(callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected get print applications ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.GetApplication('');

		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected update print application ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.UpdateUser('', '', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected update print application ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.UpdateUser('', '', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected delete print application ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.DeleteUser('', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected delete print application ajax error callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.error();
		});

		spyOn($App, "CheckMessageStatus");

		$UserModels.DeleteUser('', '');

		//	console.log(callbacks);
		expect($App.CheckMessageStatus).toHaveBeenCalled();
	});

	it("expected create print application ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.CreateUser('', callback)
		expect(callback).toHaveBeenCalled();
	});

	it("expected create print application ajax error callback", function () {
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
