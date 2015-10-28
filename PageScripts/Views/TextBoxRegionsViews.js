(function () {

	var $TextBoxRegions = function () {};

	$TextBoxRegions.variables = {};

	var callbackTextBoxRegionsDeleteConfirm = function (data) {
		$App.DAlert('TextBoxRegions Deleted', 'Edit TextBoxRegions', 'success');
		routie('ListTextBoxRegions/');
	};

	var callbackTextBoxRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('TextBoxRegions Updated', 'Edit TextBoxRegions', 'success');
		routie('ListTextBoxRegions/');
	};

	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('TextBoxRegions Deleted', 'Edit TextBoxRegions', 'success');
		routie('ListTextBoxRegions/');
	};

	var callbackCreateTextBoxRegions = function () {
		$App.DAlert('TextBoxRegions Created', 'Edit TextBoxRegions', 'success');
		routie('ListTextBoxRegions/');
	};
	
	var displayScreenFields = function(data)
	{
		  //SET VALUES
		$('#duplexMode').val(data.duplexMode);
		$("#duplexMode").prop("disabled", true);
		$('#textSettings\\.fontName').val(data.textSettings.fontName);
		$('#textSettings\\.fontName').prop("disabled", true);
		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);
		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));
		$('#textSettings\\.fontSize').prop("disabled", true);

		$('#textSettings\\.transform').val(data.textSettings.transform);
		$('#textSettings\\.transform').prop("disabled", true);
		$('#borderThickness').val(data.borderThickness);
		$("#borderThickness").prop("disabled", true);

		$('#backgroundColor').val(data.backgroundColor);
		$('#colorPick2').css("background-color", data.backgroundColor);
		$('#borderColor').val(data.borderColor);
		$('#colorPick3').css("background-color", data.borderColor);

	    //*Put input type logic here*//
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});
		
		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "TextBox", true);
		
	};

	var callbackDisplayEditTextBoxRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/textBoxRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit TextBox Region';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		//SET VALUES
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

		$('input[type=text]').each(function () {
		    $(this).attr('disabled', true);
		});

		$('#TextBoxRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TextBoxRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData(data.id));
			$TextBoxRegionsModels.UpdateTextBoxRegions(jsonData.id, obj, callbackTextBoxRegionsUpdateConfirm);
		});
		
		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "TextBox", false);

	};

	var callbackDeleteTextBoxRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/textBoxRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete TextBox Element';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
	  
		displayScreenFields(data);

		$('#TextBoxRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TextBoxRegionsForm').serializeToJSON();
			$TextBoxRegionsModels.DeleteTextBoxRegions(jsonData.id, callbackTextBoxRegionsDeleteConfirm);
		});
		
		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "TextBox", true);

	};

	var callbackDisplayTextBoxRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/textBoxRegions_template.html');

		var jsonData = {};
		jsonData.title = 'TextBox Element Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		jsonData.detailsAction = "details";
		
		jsonData.units = $.cookie('sessionUnits');
		
		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		//SET VALUES
		displayScreenFields(data);

		$('#TextBoxRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListTextBoxRegions/');
		})

	};

	var callbackDisplayGetTextBoxRegions = function (data) {

		var template = $App.LoadTemplate('templates/textBoxRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'TextBox Element Details ';
		jsonData.buttonText = 'Create';

		$('#container').html(template(data.textBoxRegions));

		$('#TextBoxRegionsListTable').DataTable();

	};

	var getTextBoxRegions = function () {};

	$TextBoxRegions.List = function () {
		$TextBoxRegionsModels.GetTextBoxRegions(callbackDisplayGetTextBoxRegions);
	};

	$TextBoxRegions.Edit = function (id) {
		$TextBoxRegionsModels.GetTextBoxRegion(id, callbackDisplayEditTextBoxRegions);
	};

	$TextBoxRegions.Delete = function (id) {
		$TextBoxRegionsModels.GetTextBoxRegion(id, callbackDeleteTextBoxRegions);
	};

	$TextBoxRegions.Display = function (id) {
		$TextBoxRegionsModels.GetTextBoxRegion(id, callbackDisplayTextBoxRegions);
	};

	$TextBoxRegions.Create = function () {

		var template = $App.LoadTemplate('templates/textBoxRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create TextBox Element';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";
		jsonData.drop = $dropDataPlugin.drop;
		
		jsonData.units = $.cookie('sessionUnits');

		$('#container').html(template(jsonData));
        $("#colorPick1").val("#000000");
		
		$('#TextBoxRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TextBoxRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData());
			$TextBoxRegionsModels.CreateTextBoxRegions(obj, callbackCreateTextBoxRegions);
		});
		
		$TextStringsPlugin.initPrintTraceStrings('', "TextBox", false);
	};

	window.$TextBoxRegions = $TextBoxRegions;
	return (this);
}
	());
