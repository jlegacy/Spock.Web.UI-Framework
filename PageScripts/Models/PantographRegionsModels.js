(function () {

	var $PantographRegionsModels = function () {};

	

	//Get One PantographRegions//
	$PantographRegionsModels.DeletePantographRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PantographRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get PantographRegions', 'error');
			}
		});

	};

	//Get a List of PantographRegions//
	$PantographRegionsModels.GetPantographRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/PantographRegions",
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
				$App.CheckMessageStatus(result, 'Get PantographRegions List', 'error');
			}
		});

	};

	//Get One PantographRegions//
	$PantographRegionsModels.GetPantographRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PantographRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get PantographRegions', 'error');
			}
		});

	};

	//Create a PantographRegions//
	$PantographRegionsModels.CreatePantographRegions = function (data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PantographRegions/",
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
				$App.CheckMessageStatus(result, 'Create PantographRegions', 'error');
			}
		});

	};

	//Update a PantographRegions//
	$PantographRegionsModels.UpdatePantographRegions = function (id, data, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/PantographRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update PantographRegions', 'error');
			}
		});

	};

	window.$PantographRegionsModels = $PantographRegionsModels;
	return (this);
}
	());
