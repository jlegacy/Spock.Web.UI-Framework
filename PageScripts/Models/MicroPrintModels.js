(function () {

	var $MicroPrintRegionsModels = function () {};

	

	//Get One MicroPrintRegions//
	$MicroPrintRegionsModels.DeleteMicroPrintRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/MicroPrintRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get MicroPrintRegions', 'error');
			}
		});

	};

	//Get a List of MicroPrintRegions//
	$MicroPrintRegionsModels.GetMicroPrintRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/MicroPrintRegions",
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
				$App.CheckMessageStatus(result, 'Get MicroPrintRegions List', 'error');
			}
		});

	};

	//Get One MicroPrintRegions//
	$MicroPrintRegionsModels.GetMicroPrintRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/MicroPrintRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get MicroPrintRegions', 'error');
			}
		});

	};

	//Create a MicroPrintRegions//
	$MicroPrintRegionsModels.CreateMicroPrintRegions = function (data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/MicroPrintRegions/",
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
				$App.CheckMessageStatus(result, 'Create MicroPrintRegions', 'error');
			}
		});

	};

	//Update a MicroPrintRegions//
	$MicroPrintRegionsModels.UpdateMicroPrintRegions = function (id, data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/MicroPrintRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update MicroPrintRegions', 'error');
			}
		});

	};

	window.$MicroPrintRegionsModels = $MicroPrintRegionsModels;
	return (this);
}
	());
