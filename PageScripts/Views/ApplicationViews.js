(function () {

	var $Application = function () {};

	$Application.variables = {};

	var callbackDeleteApplicationConfirm = function (data) {
		$App.DAlert('Application Deleted', 'Edit Application', 'success');
		routie('ListApplications/');
	};

	var callbackApplicationUpdateConfirm = function (data, status) {
		$App.DAlert('Application Updated', 'Edit Application', 'success');
		routie('ListApplications/');
	};

	var callbackDeleteApplication = function (data) {
		var template;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Application';
		jsonData.buttonText = 'Delete';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#applicationForm').serializeToJSON();
			$ApplicationModels.DeleteApplication(jsonData.id, callbackDeleteApplicationConfirm);
		})
	};

	var callbackCreateApplication = function () {
		$App.DAlert('Application Created', 'Edit Application', 'success');
		routie('ListApplication/');
	};

	var callbackDisplayEditApplication = function (data) {

		var template;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Virtual Print Application';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		setDisplayEditFields(data);

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			var disabled = $('#ApplicationForm').find(':input:disabled').removeAttr('disabled');
			var obj = $('#ApplicationForm').serializeToJSON();
			disabled.attr('disabled', 'disabled');
			$ApplicationModels.UpdateApplication(jsonData.id, obj, callbackApplicationUpdateConfirm);
		})

	};

	var callbackDisplayApplication = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/application_template.html');

		var jsonData = {};
		jsonData.title = 'Virtual Print Application Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		//General Settings

		setDisplayEditFields(data);

		//*Put input type logic here*//

		$('#ApplicationForm').find('input').each(function () {
			$(this).attr('disabled', true);
		});

		$('#ApplicationForm').find('select').each(function () {
			$(this).attr('disabled', true);
		});

		$('#applicationSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListApplications/');
		})

	};

	var setDisplayEditFields = function (data) {
		$("#sourcePrintQueueName").prop("disabled", true);
		$("#modified").prop("disabled", true);
		$("#serverName").prop("disabled", true);
		$("#destinationPrintQueueName").prop("disabled", true);

		$("#sourcePrintQueueName").val(data.sourcePrintQueueName);
		$("#destinationPrintQueueName").val(data.destinationPrintQueueName);
		$("#serverName").val(data.serverName);
		$("#profileId").val(data.profile.id);

		var saveId = data.profile.id;

		//populate profile select list
		$.ajax({
			url : $App.WebServiceRoot + "/api/Profiles",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#profileList');
				$.each(data.profiles, function (key, val) {
					$select.append('<option value="' + val.id + '">' + val.name + '</option>');
				});
				$("#profileList").val(saveId);
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

	};

	var callbackDisplayGetApplications = function (data) {

		var template = $App.LoadTemplate('templates/application_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Virtual Print Application';
		jsonData.buttonText = 'Create';
		console.log(data);

		$('#container').html(template(data.printApplications));

		$('#applicationsListTable').DataTable();

	};

	var getapplications = function () {};

	$Application.List = function () {
		var data = {};
		$ApplicationModels.GetApplications(data, callbackDisplayGetApplications);
	};

	$Application.Edit = function (id) {
		console.log(id);
		$ApplicationModels.GetApplication(id, callbackDisplayEditApplication);
	};

	$Application.Display = function (id) {
		$ApplicationModels.GetApplication(id, callbackDisplayApplication);
	};

	window.$Application = $Application;
	return (this);
}
	());
