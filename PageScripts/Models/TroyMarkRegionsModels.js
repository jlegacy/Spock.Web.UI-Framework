(function () {

	var $TroyMarkRegionsModels = function () {};

	//Get TroyMarkRegions by Print Procesor//
	$TroyMarkRegionsModels.GetTroyMarkRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions/GetTroyMarkRegionsSelectList/",
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
				$App.CheckMessageStatus(result, 'Get TroyMarkRegions Select List', 'error');
			}
		});

	};

	//Get One TroyMarkRegions//
	$TroyMarkRegionsModels.DeleteTroyMarkRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get TroyMarkRegions', 'error');
			}
		});

	};

	//Get a List of TroyMarkRegions//
	$TroyMarkRegionsModels.GetTroyMarkRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions",
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
				$App.CheckMessageStatus(result, 'Get TroyMarkRegions List', 'error');
			}
		});

	};

	//Get One TroyMarkRegions//
	$TroyMarkRegionsModels.GetTroyMarkRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get TroyMarkRegions', 'error');
			}
		});

	};

	//Create a TroyMarkRegions//
	$TroyMarkRegionsModels.CreateTroyMarkRegions = function (data, callback) {
		$App.ShowBusy();
	
		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions/",
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
				$App.CheckMessageStatus(result, 'Create TroyMarkRegions', 'error');
			}
		});

	};

	//Update a TroyMarkRegions//
	$TroyMarkRegionsModels.UpdateTroyMarkRegions = function (id, data, callback) {
		$App.ShowBusy();
	
		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update TroyMarkRegions', 'error');
			}
		});

	};

	window.$TroyMarkRegionsModels = $TroyMarkRegionsModels;
	return (this);
}
	());
