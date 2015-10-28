(function () {

	var $MicroPrintRegions = function () {};

	$MicroPrintRegions.variables = {};

	var callbackMicroPrintRegionsDeleteConfirm = function (data) {
		$App.DAlert('MicroPrintRegions Deleted', 'Edit MicroPrintRegions', 'success');
		routie('ListMicroPrintRegions/');
	};

	var callbackMicroPrintRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('MicroPrintRegions Updated', 'Edit MicroPrintRegions', 'success');
		routie('ListMicroPrintRegions/');
	};

	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('MicroPrintRegions Deleted', 'Edit MicroPrintRegions', 'success');
		routie('ListMicroPrintRegions/');
	};

	var callbackCreateMicroPrintRegions = function () {
		$App.DAlert('MicroPrintRegions Created', 'Edit MicroPrintRegions', 'success');
		routie('ListMicroPrintRegions/');
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

		$('#tag\\.textSettings\\.fontName').val(data.tag.textSettings.fontName);
		$('#tag\\.textSettings\\.fontColor').val(data.tag.textSettings.fontColor);
		$('#tag\\.textSettings\\.fontSize').val($App.trimLeadZero((data.tag.textSettings.fontSize).toString()));
		$('#tag\\.location').val(data.tag.location);

		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.transform').val(data.textSettings.transform);
		$('#textSettings\\.transform').prop("disabled", readOnly);
		$('#borderThickness').val(data.borderThickness);
		$("#borderThickness").prop("disabled", readOnly);

		$('#backgroundColor').val(data.backgroundColor);
		$('#colorPick2').css("background-color", data.backgroundColor);
		$('#borderColor').val(data.borderColor);
		$('#colorPick3').css("background-color", data.borderColor);

		//*Put input type logic here*//
		$('input[type=text]').each(function () {
			$(this).prop('disabled', readOnly);
		});
		
		$('select').each(function () {
			$(this).prop('disabled', readOnly);
		});

		if (data.tag.text.length > 0) {
			$('#tag\\.includeTag').val(1);
			$('#mpTagInfo').show();

		} else {
			$('#tag\\.includeTag').val(0);
			$('#mpTagInfo').hide();
		}

		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "MicroPrint", readOnly);

	};

	var callbackDisplayEditMicroPrintRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/MicroPrintRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit MicroPrint Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		//SET VALUES
		$('#duplexMode').val(data.duplexMode);
		
		displayScreenFields(data, false)

		$('#MicroPrintRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#MicroPrintRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData(data.id));
			$MicroPrintRegionsModels.UpdateMicroPrintRegions(jsonData.id, obj, callbackMicroPrintRegionsUpdateConfirm);
		});

		$('#tag\\.includeTag').on('change', function (e) {

			if ($(this).val() === '1') {
				$('#mpTagInfo').show();
			} else {
				$('#mpTagInfo').hide();
				$('#tag\\.text').val("");
			}

		});

	};

	var callbackDeleteMicroPrintRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/MicroPrintRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete MicroPrint Region';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		jsonData.units = $.cookie('sessionUnits');
		
		jsonData.drop = $dropDataPlugin.drop;

		$.extend(jsonData, data);

		$('#container').html(template(jsonData));

		displayScreenFields(data, true);

		$('#MicroPrintRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#MicroPrintRegionsForm').serializeToJSON();
			$MicroPrintRegionsModels.DeleteMicroPrintRegions(jsonData.id, callbackMicroPrintRegionsDeleteConfirm);
		});


	};

	var callbackDisplayMicroPrintRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/MicroPrintRegions_template.html');

		var jsonData = {};
		jsonData.title = 'MicroPrint Region Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		jsonData.detailsAction = "details";

		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		//SET VALUES
		displayScreenFields(data, true);

		$('#MicroPrintRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListMicroPrintRegions/');
		})

	};

	var callbackDisplayGetMicroPrintRegions = function (data) {

		var template = $App.LoadTemplate('templates/MicroPrintRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create MicroPrint Region';
		jsonData.buttonText = 'Create';

		$('#container').html(template(data.microPrintRegions));

		$('#MicroPrintRegionsListTable').DataTable();

	};

	var getMicroPrintRegions = function () {};

	$MicroPrintRegions.List = function () {
		$MicroPrintRegionsModels.GetMicroPrintRegions(callbackDisplayGetMicroPrintRegions);
	};

	$MicroPrintRegions.Edit = function (id) {
		$MicroPrintRegionsModels.GetMicroPrintRegion(id, callbackDisplayEditMicroPrintRegions);
	};

	$MicroPrintRegions.Delete = function (id) {
		$MicroPrintRegionsModels.GetMicroPrintRegion(id, callbackDeleteMicroPrintRegions);
	};

	$MicroPrintRegions.Display = function (id) {
		$MicroPrintRegionsModels.GetMicroPrintRegion(id, callbackDisplayMicroPrintRegions);
	};

	$MicroPrintRegions.Create = function () {

		var template = $App.LoadTemplate('templates/MicroPrintRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create MicroPrint Region';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";

		jsonData.units = $.cookie('sessionUnits');
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		$("#colorPick1").val("#000000");


		$('#MicroPrintRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#MicroPrintRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData());
			$MicroPrintRegionsModels.CreateMicroPrintRegions(obj, callbackCreateMicroPrintRegions);
		});

		$TextStringsPlugin.initPrintTraceStrings('', "MicroPrint", false);
	};

	window.$MicroPrintRegions = $MicroPrintRegions;
	return (this);
}
	());
