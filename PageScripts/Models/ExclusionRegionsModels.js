(function () {

	var $ExclusionRegionsModels = function () {};

	//Get ExclusionRegions by Print Procesor//
	$ExclusionRegionsModels.GetExclusionRegionsSelectList = function (data, callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions/GetExclusionRegionsSelectList/",
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
				$App.CheckMessageStatus(result, 'Get ExclusionRegions Select List', 'error');
			}
		});

	};

	//Delete ExclusionRegions//
	$ExclusionRegionsModels.DeleteExclusionRegions = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get ExclusionRegions', 'error');
			}
		});

	};

	//Get a List of ExclusionRegions//
	$ExclusionRegionsModels.GetExclusionRegions = function (callback) {
		$App.ShowBusy();
		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions",
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
				$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

	};

	//Get One ExclusionRegions//
	$ExclusionRegionsModels.GetExclusionRegion = function (id, callback) {
		$App.ShowBusy();

		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Get ExclusionRegions', 'error');
			}
		});

	};

	//Create a ExclusionRegions//
	$ExclusionRegionsModels.CreateExclusionRegions = function (data, callback) {
		$App.ShowBusy();
		
		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions/",
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
				$App.CheckMessageStatus(result, 'Create ExclusionRegions', 'error');
			}
		});

	};

	//Update a ExclusionRegions//
	$ExclusionRegionsModels.UpdateExclusionRegions = function (id, data, callback) {
		$App.ShowBusy();
		
		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions/" + id,
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
				$App.CheckMessageStatus(result, 'Update ExclusionRegions', 'error');
			}
		});

	};

	window.$ExclusionRegionsModels = $ExclusionRegionsModels;
	return (this);
}
	());
