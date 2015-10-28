(function () {

	var $TroyMarkRegions = function () {};

	$TroyMarkRegions.variables = {}; 

	var callbackTroyMarkRegionsDeleteConfirm = function (data) {
		$App.DAlert('TroyMarkRegions Deleted', 'Edit TroyMarkRegions', 'success'); 
		routie('ListTroyMarkRegions/');
	};

	var callbackTroyMarkRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('TroyMarkRegions Updated', 'Edit TroyMarkRegions', 'success');
		routie('ListTroyMarkRegions/');
	};
	
	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('TroyMarkRegions Deleted', 'Edit TroyMarkRegions', 'success');
		routie('ListTroyMarkRegions/');
	};

	var callbackCreateTroyMarkRegions = function () {
		$App.DAlert('TroyMarkRegions Created', 'Edit TroyMarkRegions', 'success');
		routie('ListTroyMarkRegions/');
	};

	var callbackDisplayEditTroyMarkRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/troyMarkRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit TroyMark Element';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		$('#duplexMode').val(data.duplexMode);
		
		 //SET VALUES
		$('#duplexMode').val(data.duplexMode);
		$('#placement').val(data.placement);
		$('#pattern').val(data.pattern);

		$('#textSettings\\.fontName').val(data.textSettings.fontName);
		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);
		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));
		$('#textSettings\\.transform').val(data.textSettings.transform);
	
		$("#lineSpacing").val(data.lineSpacing);

		$('#TroyMarkRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TroyMarkRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData(data.id));
			$TroyMarkRegionsModels.UpdateTroyMarkRegions(jsonData.id, obj, callbackTroyMarkRegionsUpdateConfirm);
		});
		
		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "TroyMark", false);

	};
	
	var displayScreenFields = function(data)
	{
		  //SET VALUES
		$('#duplexMode').val(data.duplexMode);
		$("#duplexMode").prop("disabled", true);

		$('#placement').val(data.placement);
		$("#placement").prop("disabled", true);

		$('#pattern').val(data.pattern);
		$("#pattern").prop("disabled", true);


		$('#textSettings\\.fontName').val(data.textSettings.fontName);
		$('#textSettings\\.fontName').prop("disabled", true);
		$('#textSettings\\.fontColor').val(data.textSettings.fontColor);
		$('#colorPick1').css("background-color", data.textSettings.fontColor);

		$('#textSettings\\.fontSize').val($App.trimLeadZero((data.textSettings.fontSize).toString()));
		$('#textSettings\\.fontSize').prop("disabled", true);
		$('#textSettings\\.transform').val(data.textSettings.transform);
		$('#textSettings\\.transform').prop("disabled", true);

		$("#lineSpacing").val(data.lineSpacing);

	    //*Put input type logic here*//
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});
		
		$TextStringsPlugin.initPrintTraceStrings(data.textElements, "TroyMark", true);
		
	};
	
	var callbackDeleteTroyMarkRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/troyMarkRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete TroyMark Element';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
	  
		displayScreenFields(data);

		$('#TroyMarkRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TroyMarkRegionsForm').serializeToJSON();
			$TroyMarkRegionsModels.DeleteTroyMarkRegions(jsonData.id, callbackTroyMarkRegionsDeleteConfirm);
		});
		

	};

	var callbackDisplayTroyMarkRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/troyMarkRegions_template.html');

		var jsonData = {};
		jsonData.title = 'TroyMark Element Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
	    jsonData.detailsAction = "details";
		jsonData.units = $.cookie('sessionUnits');
		
	    $.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

	    $('#container').html(template(jsonData));
		
		displayScreenFields(data);
		
		 //SET VALUES
		$('#TroyMarkRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListTroyMarkRegions/');
		})
		

	};

	var callbackDisplayGetTroyMarkRegions = function (data) {

		var template = $App.LoadTemplate('templates/troyMarkRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create TroyMarkRegions';
		jsonData.buttonText = 'Create TroyMarkRegions';
		jsonData.units = $.cookie('sessionUnits');

		$('#container').html(template(data.troyMarkRegions)); 

		$('#troyMarkRegionsListTable').DataTable();

	};

	var getTroyMarkRegions = function () {};

	$TroyMarkRegions.List = function () {
		$TroyMarkRegionsModels.GetTroyMarkRegions(callbackDisplayGetTroyMarkRegions);
	};

	$TroyMarkRegions.Edit = function (id) {
		$TroyMarkRegionsModels.GetTroyMarkRegion(id, callbackDisplayEditTroyMarkRegions);
	};
	
	$TroyMarkRegions.Delete = function (id) {
		$TroyMarkRegionsModels.GetTroyMarkRegion(id, callbackDeleteTroyMarkRegions);
	};

	$TroyMarkRegions.Display = function (id) {
		$TroyMarkRegionsModels.GetTroyMarkRegion(id, callbackDisplayTroyMarkRegions);
	};

	$TroyMarkRegions.Create = function () {

		var template = $App.LoadTemplate('templates/troyMarkRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Create TroyMark Element';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";
		jsonData.units = $.cookie('sessionUnits');
		jsonData.drop = $dropDataPlugin.drop;


		$('#container').html(template(jsonData));

		var foo = $.cookie("sessionUnits");
		if (foo == "Millimeters") {
		    $("#lineSpacing").val("12.7");
		}
		if (foo == "Centimeters") {
		    $("#lineSpacing").val("1.27");
		}
		if (foo == "Inches") {
		    $("#lineSpacing").val(".5");
		}

	
		$('#TroyMarkRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#TroyMarkRegionsForm').serializeToJSON();
			$.extend(obj, $TextStringsPlugin.convertTextStringsToJSONData());
			$TroyMarkRegionsModels.CreateTroyMarkRegions(obj, callbackCreateTroyMarkRegions);
		})
		
		$TextStringsPlugin.initPrintTraceStrings('', "TroyMark", false);
	};

	window.$TroyMarkRegions = $TroyMarkRegions;
	return (this);
}
	());
