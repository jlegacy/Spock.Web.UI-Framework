(function () {

	var $ExclusionRegions = function () {};

	$ExclusionRegions.variables = {};

	var callbackExclusionRegionsDeleteConfirm = function (data) {
		$App.DAlert('ExclusionRegions Deleted', 'Edit ExclusionRegions', 'success'); 
		routie('ListExclusionRegions/');
	};

	var callbackExclusionRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ExclusionRegions Updated', 'Edit ExclusionRegions', 'success');
		routie('ListExclusionRegions/');
	};
	
	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ExclusionRegions Deleted', 'Edit ExclusionRegions', 'success');
		routie('ListExclusionRegions/');
	};



	var callbackCreateExclusionRegions = function () {
		$App.DAlert('ExclusionRegions Created', 'Edit ExclusionRegions', 'success');
		routie('ListExclusionRegions/');
	};
	
	var setCheckBoxesToTrueFalse = function (obj) {
		if (obj.excludeImages) {
			if (obj.excludeImages === 'on') {
				obj.excludeImages = true;
			} else {
				obj.excludeImages = false;
			}
		};
		if (obj.excludeMicroPrint) {

			if (obj.excludeMicroPrint === 'on') {
				obj.excludeMicroPrint = true;
			} else {
				obj.excludeMicroPrint = false;
			}
		};

		if (obj.excludePantograph) {
			if (obj.excludePantograph === 'on') {
				obj.excludePantograph = true;
			} else {
				obj.excludePantograph = false;
			}
		};

		if (obj.excludePrintTrace) {
			if (obj.excludePrintTrace === 'on') {
				obj.excludePrintTrace = true;
			} else {
				obj.excludePrintTrace = false;
			}
		};

		if (obj.excludeTextBox) {
			if (obj.excludeTextBox === 'on') {
				obj.excludeTextBox = true;
			} else {
				obj.excludeTextBox = false;
			}
		};

		if (obj.excludeTroyMark) {
			if (obj.excludeTroyMark === 'on') {
				obj.excludeTroyMark = true;
			} else {
				obj.excludeTroyMark = false;
			}
		};
		
		if (obj.excludeDataCapture) {
			if (obj.excludeDataCapture === 'on') {
				obj.excludeDataCapture = true;
			} else {
				obj.excludeDataCapture = false;
			}
		};

		return obj;
	};

	var callbackDisplayEditExclusionRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/ExclusionRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Exclusion Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;
		
		$('#container').html(template(jsonData));
		$('#duplexMode').val(data.duplexMode);
		
		$("#excludeImages").prop( "checked", data.excludeImages );
		$("#excludeMicroPrint").prop( "checked", data.excludeMicroPrint );
		$("#excludePantograph").prop( "checked", data.excludePantograph );
		$("#excludePrintTrace").prop( "checked", data.excludePrintTrace );
		$("#excludeDataCapture").prop( "checked", data.excludeDataCapture );
		$("#excludeTextBox").prop( "checked", data.excludeTextBox );
		$("#excludeTroyMark").prop( "checked", data.excludeTroyMark );
		
		$('#ExclusionRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ExclusionRegionsForm').serializeToJSON();
			//set checkboxes true or false//
			obj = setCheckBoxesToTrueFalse(obj);
			$ExclusionRegionsModels.UpdateExclusionRegions(jsonData.id, obj, callbackExclusionRegionsUpdateConfirm);
		})


	};
	
	var callbackDeleteExclusionRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/ExclusionRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Exclusion Region';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});

		$('#ExclusionRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ExclusionRegionsForm').serializeToJSON();
			$ExclusionRegionsModels.DeleteExclusionRegions(jsonData.id, callbackExclusionRegionsDeleteConfirm);
		})

	};

	var callbackDisplayExclusionRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/ExclusionRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Exclusion Region Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
	    jsonData.detailsAction = "details";
		jsonData.units = $.cookie('sessionUnits');
		
	    $.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

	    $('#container').html(template(jsonData));
	    $('#duplexMode').val(data.duplexMode);

		//*Put input type logic here*//
		$('input[type=text]').each(function () {
			$(this).prop('disabled', true);
		});

		$('#ExclusionRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListExclusionRegions/');
		})

	};

	var callbackDisplayGetExclusionRegions = function (data) {

		var template = $App.LoadTemplate('templates/ExclusionRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Exclusion Region';
		jsonData.buttonText = 'Create ExclusionRegions';
	

		$('#container').html(template(data.exclusionRegions));

		$('#ExclusionRegionsListTable').DataTable();

	};

	var getExclusionRegions = function () {};

	$ExclusionRegions.List = function () {
		$ExclusionRegionsModels.GetExclusionRegions(callbackDisplayGetExclusionRegions);
	};

	$ExclusionRegions.Edit = function (id) {
		$ExclusionRegionsModels.GetExclusionRegion(id, callbackDisplayEditExclusionRegions);
	};
	
	$ExclusionRegions.Delete = function (id) {
		$ExclusionRegionsModels.GetExclusionRegion(id, callbackDeleteExclusionRegions);
	};

	$ExclusionRegions.Display = function (id) {
		$ExclusionRegionsModels.GetExclusionRegion(id, callbackDisplayExclusionRegions);
	};

	$ExclusionRegions.Create = function () {

		var template = $App.LoadTemplate('templates/ExclusionRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Exclusion Region';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";
		
		jsonData.units = $.cookie('sessionUnits');
		
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('#ExclusionRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ExclusionRegionsForm').serializeToJSON();
			$ExclusionRegionsModels.CreateExclusionRegions(obj, callbackCreateExclusionRegions);
		})
	};

	window.$ExclusionRegions = $ExclusionRegions;
	return (this);
}
	());
