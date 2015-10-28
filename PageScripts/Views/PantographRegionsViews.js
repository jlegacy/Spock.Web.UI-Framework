(function () {

	var $PantographRegions = function () {};

	$PantographRegions.variables = {};

	var callbackPantographRegionsDeleteConfirm = function (data) {
		$App.DAlert('PantographRegions Deleted', 'Edit PantographRegions', 'success');
		routie('ListPantographRegions/');
	};

	var callbackPantographRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PantographRegions Updated', 'Edit PantographRegions', 'success');
		routie('ListPantographRegions/');
	};

	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PantographRegions Deleted', 'Edit PantographRegions', 'success');
		routie('ListPantographRegions/');
	};

	var callbackCreatePantographRegions = function () {
		$App.DAlert('PantographRegions Created', 'Edit PantographRegions', 'success');
		routie('ListPantographRegions/');
	};

	var displayScreenFields = function (data, readOnly) {
		//SET VALUES

		$('#duplexMode').val(data.duplexMode);
		$("#duplexMode").prop("disabled", readOnly);

		$('#padding').val(data.padding);
		$('#margin').val(data.margin);

		$('#textSettings\\.fontName').val(data.textSettings.fontName);
		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);
		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));
		$('#textSettings\\.fontSize').prop("disabled", readOnly);

		$('#textSettings\\.fontName').val(data.textSettings.fontName);
		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);
		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));
		$('#location').val(data.location);

		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.transform').val(data.textSettings.transform);
		$('#textSettings\\.transform').prop("disabled", readOnly);
		$('#borderThickness').val(data.borderThickness);
		$("#borderThickness").prop("disabled", readOnly);

		$('#backgroundColor').val(data.backgroundColor);
		$('#colorPick2').css("background-color", data.backgroundColor);
		$('#borderColor').val(data.borderColor);
		$('#colorPick3').css("background-color", data.borderColor);

		$('#pattern').val(data.pattern);
		$('#interferencePattern').val(data.interferencePattern);
		var imgPath = "./Content/img/Interference/Pattern" + data.interferencePattern + ".png";
		$("#patternDisplay").attr('src', imgPath);

		//*Put input type logic here*//
		$('input[type=text]').each(function () {
			$(this).prop('disabled', readOnly);
		});
		
		$('select').each(function () {
			$(this).prop('disabled', readOnly);
		});


		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "Pantograph", readOnly);

	};

	var callbackDisplayEditPantographRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/PantographRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Pantograph Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		//SET VALUES
		$('#duplexMode').val(data.duplexMode);
		$('#pattern').val(data.pattern);
		$('#interferencePattern').val(data.interferencePattern);
		var imgPath = "./Content/img/Interference/Pattern" + data.interferencePattern + ".png";
		$("#patternDisplay").attr('src', imgPath);

		displayScreenFields(data, false)

		$('#PantographRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PantographRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData(data.id));
			$PantographRegionsModels.UpdatePantographRegions(jsonData.id, obj, callbackPantographRegionsUpdateConfirm);
		});

	};

	var callbackDeletePantographRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/PantographRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Pantograph Region';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		jsonData.units = $.cookie('sessionUnits');
		
		jsonData.drop = $dropDataPlugin.drop;

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		displayScreenFields(data, true);

		$('#PantographRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PantographRegionsForm').serializeToJSON();
			$PantographRegionsModels.DeletePantographRegions(jsonData.id, callbackPantographRegionsDeleteConfirm);
		});


	};

	var callbackDisplayPantographRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/PantographRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Pantograph Region Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		jsonData.detailsAction = "details";

		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		//SET VALUES
		displayScreenFields(data, true);

		$('#PantographRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListPantographRegions/');
		})

	};

	var callbackDisplayGetPantographRegions = function (data) {

		var template = $App.LoadTemplate('templates/PantographRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Pantograph Region';
		jsonData.buttonText = 'Create';

		$('#container').html(template(data.pantographRegions));

		$('#PantographRegionsListTable').DataTable();

	};

	var getPantographRegions = function () {};

	$PantographRegions.List = function () {
		$PantographRegionsModels.GetPantographRegions(callbackDisplayGetPantographRegions);
	};

	$PantographRegions.Edit = function (id) {
		$PantographRegionsModels.GetPantographRegion(id, callbackDisplayEditPantographRegions);
	};

	$PantographRegions.Delete = function (id) {
		$PantographRegionsModels.GetPantographRegion(id, callbackDeletePantographRegions);
	};

	$PantographRegions.Display = function (id) {
		$PantographRegionsModels.GetPantographRegion(id, callbackDisplayPantographRegions);
	};

	$PantographRegions.Create = function () {

		var template = $App.LoadTemplate('templates/PantographRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Pantograph Region';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";

		jsonData.units = $.cookie('sessionUnits');
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		$("#colorPick1").val("#000000");

		$('#PantographRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PantographRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData());
			$PantographRegionsModels.CreatePantographRegions(obj, callbackCreatePantographRegions);
		});

		$TextStringsPlugin.initPrintTraceStrings('', "Pantograph", false);
	};

	window.$PantographRegions = $PantographRegions;
	return (this);
}
	());
