(function () {

	var $PrintTraceRegions = function () {};

	$PrintTraceRegions.variables = {};

	var callbackPrintTraceRegionsDeleteConfirm = function (data) {
		$App.DAlert('PrintTraceRegions Deleted', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/');
	};

	var callbackPrintTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PrintTraceRegions Updated', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/'); 
	};

	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('PrintTraceRegions Deleted', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/');
	};

	var callbackCreatePrintTraceRegions = function (data) {
		$App.DAlert('PrintTraceRegions Created', 'Edit PrintTraceRegions', 'success');
		routie('ListPrintTraceRegions/'); 
	};

	var callbackPopulatePrintTraceRegionsTextElements = function (data) {
		//populate the screen with data//
		//manually bump add string button
		var container;
		$.each(data, function (key, value) {
			$('#addString').trigger('click');
			//get line just added
			container = $('#builder-basic_String_' + (key + 1));
			//set values using existing 'click' logic
			container.find('#stringTypes').val(value.type);
			container.find('#stringTypes').trigger('change');
			container.find('#jobTicketSelector').val(value.jobTicketSelector);
			container.find('#text').val(value.text);
		});
	};

	var callbackDisplayEditPrintTraceRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Print Trace Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		displayScreenFields(data, false);

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData(data.id));
			$PrintTraceRegionsModels.UpdatePrintTraceRegions(jsonData.id, obj, callbackPrintTraceRegionsUpdateConfirm);
		})

	};

	var callbackDeletePrintTraceRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Print Trace Region';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		displayScreenFields(data, true);

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$PrintTraceRegionsModels.DeletePrintTraceRegions(jsonData.id, callbackPrintTraceRegionsDeleteConfirm);
		});

	};

	var displayScreenFields = function (data, readOnly) {

		$('#duplexMode').val(data.duplexMode);

		$('#textSettings\\.fontName').val(data.textSettings.fontName);

		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);

		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));

		$('#textSettings\\.transform').val(data.textSettings.transform);

		$('#borderThickness').val(data.borderThickness);

		$('#backgroundColor').val(data.backgroundColor);

		$('#colorPick2').css("background-color", data.backgroundColor);

		$('#borderColor').val(data.borderColor);

		$('#colorPick3').css("background-color", data.borderColor);

		//*Put input type logic here*//

		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "PrintTrace", readOnly);

		if (readOnly === true) {
			$('#PrintTraceForm').find('input[type=text]').each(function () {
				$(this).removeAttr('readonly');
			});
			$('#PrintTraceForm').find('input').each(function () {
				$(this).prop('disabled', true);
			});
			$('#PrintTraceForm').find('select').each(function () {
				$(this).prop('disabled', true);
			});

			$("#duplexMode").prop("disabled", true);
			$("#topLeft\\.X").prop('disabled', true);
			$("#topLeft\\.Y").prop('disabled', true);
			$("#bottomRight\\.X").prop('disabled', true);
			$("#bottomRight\\.Y").prop('disabled', true);
			$('#textSettings\\.fontName').prop("disabled", true);

			$('#textSettings\\.fontSize').prop("disabled", true);
			$('#textSettings\\.fontColor').prop("disabled", true);
			$('#textSettings\\.transform').prop("disabled", true);
			$("#borderThickness").prop("disabled", true);
			$('#backgroundColor').prop("disabled", true);
			$('#borderColor').prop("disabled", true);

			$("#name").prop("disabled", true);
			$("#description").prop("disabled", true);
		}

	};

	var callbackDisplayPrintTraceRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Print Trace Region Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		displayScreenFields(data, true);

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListPrintTraceRegions/');
		});

	};

	var callbackDisplayGetPrintTraceRegions = function (data) {

		var template = $App.LoadTemplate('templates/printTraceRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Print Trace Region';
		jsonData.buttonText = 'Create Print Trace Region';
		jsonData.units = $.cookie('sessionUnits');

		$('#container').html(template(data.printTraceRegions));

		$('#printTraceRegionsListTable').DataTable();

	};

	var getprintTraceRegions = function () {};

	$PrintTraceRegions.List = function () {
		var data = {};
		$PrintTraceRegionsModels.GetPrintTraceRegions(data, callbackDisplayGetPrintTraceRegions);
	};

	$PrintTraceRegions.Edit = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDisplayEditPrintTraceRegions);
	};

	$PrintTraceRegions.Delete = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDeletePrintTraceRegions);
	};

	$PrintTraceRegions.Display = function (id) {
		$PrintTraceRegionsModels.GetPrintTraceRegion(id, callbackDisplayPrintTraceRegions);
	};

	$PrintTraceRegions.Create = function () {

		var template = $App.LoadTemplate('templates/printTraceRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create Print Trace Region';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.units = $.cookie('sessionUnits');

		jsonData.drop = $dropDataPlugin.drop;
		$('#container').html(template(jsonData));

		$('#textSettings\\.fontColor').val("#000000");
		$('#colorPick1').css("background-color", "#000000");

		$('#backgroundColor').val("#FFFFFF");
		$('#colorPick2').css("background-color", "#FFFFFF");

		$('#borderColor').val("#000000");
		$('#colorPick3').css("background-color", "#000000");

		$('#PrintTraceRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#PrintTraceRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData());
			$PrintTraceRegionsModels.CreatePrintTraceRegions(obj, callbackCreatePrintTraceRegions);
		});

		$TextStringsPlugin.initPrintTraceStrings('', "PrintTrace", false);
	};

	window.$PrintTraceRegions = $PrintTraceRegions;
	return (this);
}
	());
