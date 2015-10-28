(function () {

	var $DataCaptureRegionsModels = function () {};

	//Get DataCaptureRegions by Print Procesor//
	$DataCaptureRegionsModels.GetDataCaptureRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions/GetDataCaptureRegionsSelectList/",
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
				$App.CheckMessageStatus(result, 'Get DataCaptureRegions Select List', 'error');
			}
		});

	};
	
	//Get DataCaptureRegions by Print Procesor//
	$DataCaptureRegionsModels.GetDataCaptureRegionsSelectListDeferred = function () {
	var def = $.Deferred();
		$App.ShowBusy();
		
		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (result, status, request) {
				$App.HideBusy();
				def.resolve(result);
			},
			error : function (result, status) {
				$App.HideBusy();
				$App.CheckMessageStatus(result, 'Get DataCaptureRegions', 'error');
				def.resolve(result);
			}
		});
		
		return def.promise();

	};

	//Get One DataCaptureRegions//
	$DataCaptureRegionsModels.DeleteDataCaptureRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get DataCaptureRegions', 'error');
			}
		});

	};

	//Get a List of DataCaptureRegions//
	$DataCaptureRegionsModels.GetDataCaptureRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions",
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
				$App.CheckMessageStatus(result, 'Get DataCaptureRegions List', 'error');
			}
		});

	};

	//Get One DataCaptureRegions//
	$DataCaptureRegionsModels.GetDataCaptureRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get DataCaptureRegions', 'error');
			}
		});

	};

	//Create a DataCaptureRegions//
	$DataCaptureRegionsModels.CreateDataCaptureRegions = function (data, callback) {
		$App.ShowBusy();
		
		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions/",
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
				$App.CheckMessageStatus(result, 'Create DataCaptureRegions', 'error');
			}
		});

	};

	//Update a DataCaptureRegions//
	$DataCaptureRegionsModels.UpdateDataCaptureRegions = function (id, data, callback) {
		$App.ShowBusy();
		
		$.ajax({
			url : $App.WebServiceRoot + "/api/DataCaptureRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update DataCaptureRegions', 'error');
			}
		});

	};

	window.$DataCaptureRegionsModels = $DataCaptureRegionsModels;
	return (this);
}
	());
