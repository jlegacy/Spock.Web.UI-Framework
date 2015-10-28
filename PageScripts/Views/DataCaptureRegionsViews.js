(function () {

	var $DataCaptureRegions = function () {};

	$DataCaptureRegions.variables = {};

	var callbackDataCaptureRegionsDeleteConfirm = function (data) {
		$App.DAlert('DataCaptureRegions Deleted', 'Edit DataCaptureRegions', 'success'); 
		routie('ListDataCaptureRegions/');
	};

	var callbackDataCaptureRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('DataCaptureRegions Updated', 'Edit DataCaptureRegions', 'success');
		routie('ListDataCaptureRegions/');
	};
	
	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('DataCaptureRegions Deleted', 'Edit DataCaptureRegions', 'success');
		routie('ListDataCaptureRegions/');
	};



	var callbackCreateDataCaptureRegions = function () {
		$App.DAlert('DataCaptureRegions Created', 'Edit DataCaptureRegions', 'success');
		routie('ListDataCaptureRegions/');
	};

	var callbackDisplayEditDataCaptureRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/DataCaptureRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Data Capture Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		$('#hideText').val(data.hideText.toString());

		$('#DataCaptureRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#DataCaptureRegionsForm').serializeToJSON();
			$DataCaptureRegionsModels.UpdateDataCaptureRegions(jsonData.id, obj, callbackDataCaptureRegionsUpdateConfirm);
		})


	};
	
	var callbackDeleteDataCaptureRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/DataCaptureRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Data Capture Region';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
	    //Disable all Textboxes//
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});

		$('#hideText').val(data.hideText.toString());
		$('#hideText').prop('disabled', true);

		$('#DataCaptureRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#DataCaptureRegionsForm').serializeToJSON();
			$DataCaptureRegionsModels.DeleteDataCaptureRegions(jsonData.id, callbackDataCaptureRegionsDeleteConfirm);
		})

	};

	var callbackDisplayDataCaptureRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/DataCaptureRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Data Capture Region Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
	    jsonData.detailsAction = "details";
		
	    $.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

	    $('#container').html(template(jsonData));

	    //Disable all Textboxes//
	    $('input[type=text]').each(function () {
	        $(this).prop('disabled', true);
	    });

	    $('#hideText').val(data.hideText.toString());
	    $('#hideText').prop('disabled', true);




		$('#DataCaptureRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListDataCaptureRegions/');
		})

	};

	var callbackDisplayGetDataCaptureRegions = function (data) {

		var template = $App.LoadTemplate('templates/DataCaptureRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Data Capture Region';
		jsonData.buttonText = 'Create Data Capture Region';

		$('#container').html(template(data.dataCaptureRegions)); 

		$('#DataCaptureRegionsListTable').DataTable();

	};

	var getDataCaptureRegions = function () {};

	$DataCaptureRegions.List = function () {
		$DataCaptureRegionsModels.GetDataCaptureRegions(callbackDisplayGetDataCaptureRegions);
	};

	$DataCaptureRegions.Edit = function (id) {
		$DataCaptureRegionsModels.GetDataCaptureRegion(id, callbackDisplayEditDataCaptureRegions);
	};
	
	$DataCaptureRegions.Delete = function (id) {
		$DataCaptureRegionsModels.GetDataCaptureRegion(id, callbackDeleteDataCaptureRegions);
	};

	$DataCaptureRegions.Display = function (id) {
		$DataCaptureRegionsModels.GetDataCaptureRegion(id, callbackDisplayDataCaptureRegions);
	};

	$DataCaptureRegions.Create = function () {

		var template = $App.LoadTemplate('templates/DataCaptureRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Data Capture Region';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";

		jsonData.drop = $dropDataPlugin.drop;
		$('#container').html(template(jsonData));

	
		$('#DataCaptureRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#DataCaptureRegionsForm').serializeToJSON();
			$DataCaptureRegionsModels.CreateDataCaptureRegions(obj, callbackCreateDataCaptureRegions);
		})
	};

	window.$DataCaptureRegions = $DataCaptureRegions;
	return (this);
}
	());
