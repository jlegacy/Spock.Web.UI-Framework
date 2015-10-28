describe("Test AJAX User Token", function () {

	beforeEach(function () {
		jasmine.Ajax.install();
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
		jasmine.clock().uninstall();
	});

	it("expected token proper endpoint", function () {
		var doneFN = jasmine.createSpy("success");

		var obj = {};
		var callback = {};

		$UserModels.GetToken(obj, callback);
		expect(jasmine.Ajax.requests.mostRecent().url).toBe($App.WebServiceRoot + '/authorize');
	});

	it("expected token ajax success callback", function () {
		var obj = {};
		spyOn($, "ajax").and.callFake(function (options) {
			options.success();
		});
		var callback = jasmine.createSpy();

		$UserModels.GetToken(obj, callback);
		expect(callback).toHaveBeenCalled();
	});

});

describe("Get Token From Server", function () {
	
	var flag = "false";
	var data = {};
	
	data.grant_type = 'password';
	data.userName = 'securedoc.admin@troygroup.com';
	data.password = 'rasP3VRxzt8E4RYM';
	
	beforeEach(function (done) {
		$.ajax({
			type: "POST",
			url : $App.WebServiceRoot + '/authorize',
			data : data,
			contentType: "application/x-www-form-urlencoded",
			success : function (data) {
				flag = true;
				done();
			},
			error : function (data) {
				flag = false;
				done();
			},
		
		});
	});

	it("successfully fetched token from server.", function () {
		expect(flag).toEqual(true);
	});
});
