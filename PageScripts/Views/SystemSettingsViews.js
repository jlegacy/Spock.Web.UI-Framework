(function () {

	var $SystemSettings = function () {};

	var callbackAddLicenseSystemSettings = function () {
		$App.DAlert('License Added', 'Edit SystemSettings', 'success');
		routie('ListSystemSettings/');
	};

	var callbackUpdateLanguageSystemSettings = function (data) {
		
		$App.SetSystemSession(data);
		$App.DAlert('Language/Units Updated', 'Edit SystemSettings', 'success');
		routie('ListSystemSettings/');
	};

	var callbackDisplayGetSystemSettings = function (data, status) {

		var template = $App.LoadTemplate('templates/systemSettings_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create SystemSettings';
		jsonData.buttonText = 'Create SystemSettings';
		
		$App.SetSystemSession(data);

		$('#container').html(template(data));
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});

		$('#systemSettingsListTable').DataTable();

	};

	$SystemSettings.AddLicense = function () {

		var template = $App.LoadTemplate('templates/systemSettings_AddLicense_template.html');

		var jsonData = {};
		jsonData.title = 'System Settings';
		jsonData.buttonText = 'Add License';
		jsonData.create = "true";
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('#SystemSettingsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#SystemSettingsForm').serializeToJSON();
			$SystemSettingsModels.CreateSystemSettings(obj, callbackAddLicenseSystemSettings);
		})
	};

	$SystemSettings.UpdateLanguage = function () {

		var template = $App.LoadTemplate('templates/systemSettings_UpdateLanguage_template.html');

		var jsonData = {};
		jsonData.title = 'SystemSettings';
		jsonData.buttonText = 'Update Language/Units';
		jsonData.create = "true";
		jsonData.language = $.cookie('sessionLanguage');
		jsonData.units =  $.cookie('sessionUnits');

		$('#container').html(template(jsonData));

		$('#SystemSettingsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#SystemSettingsForm').serializeToJSON();
			$SystemSettingsModels.CreateSystemSettings(obj, callbackUpdateLanguageSystemSettings);
		})
	};

	$SystemSettings.List = function () {
		$SystemSettingsModels.GetSystemSettings(callbackDisplayGetSystemSettings);
	};

	window.$SystemSettings = $SystemSettings;
	return (this);
}
	());
