(function () {

	var $TextBoxRegionsModels = function () {};

	//Get TextBoxRegions by Print Procesor//
	$TextBoxRegionsModels.GetTextBoxRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions/GetTextBoxRegionsSelectList/",
			type : "GET",
			data : data,
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get TextBoxRegions Select List', 'error');
			}
		});

	};

	//Get One TextBoxRegions//
	$TextBoxRegionsModels.DeleteTextBoxRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions/" + id,
			type : "DELETE",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get TextBoxRegions', 'error');
			}
		});

	};

	//Get a List of TextBoxRegions//
	$TextBoxRegionsModels.GetTextBoxRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get TextBoxRegions List', 'error');
			}
		});

	};

	//Get One TextBoxRegions//
	$TextBoxRegionsModels.GetTextBoxRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions/" + id,
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result);
			},
			error : function (result) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get TextBoxRegions', 'error');
			}
		});

	};

	//Create a TextBoxRegions//
	$TextBoxRegionsModels.CreateTextBoxRegions = function (data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions/",
			type : "Post",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Create TextBoxRegions', 'error');
			}
		});

	};

	//Update a TextBoxRegions//
	$TextBoxRegionsModels.UpdateTextBoxRegions = function (id, data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions/" + id,
			type : "PUT",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			data : data,
			contentType : "application/x-www-form-urlencoded",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				callback(result, status);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Update TextBoxRegions', 'error');
			}
		});

	};

	window.$TextBoxRegionsModels = $TextBoxRegionsModels;
	return (this);
}
	());
