(function () {

	var $Profile = function () {};

	$Profile.variables = {};

	var callbackDeleteProfileConfirm = function (data) {
		$App.DAlert('Profile Deleted', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};
	

	var callbackSecurityElementsFormSubmit = function (data) {
		$App.DAlert('Security Element Added', 'Edit Profile', 'success');
		$('#addSecurityElement').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$Profile.Details($('#hiddenProfileId').val());
	};

	var callbackSecurityElementsDeleteFormSubmit = function (data) {
		$App.DAlert('Security Element Deleted', 'Edit Profile', 'success');
		$('#addSecurityElement').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$Profile.Details($('#hiddenProfileId').val());
	};

	var callbackPrintTraceFormSubmit = function (data) {
		$App.DAlert('Print Trace Element Added', 'Edit Profile', 'success');
		$('#addPrintTraceElement').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$Profile.Details($('#hiddenProfileId').val());
	};

	var callbackExclusionRegionFormSubmit = function (data) {
		$App.DAlert('Exclusion Region Added', 'Edit Profile', 'success');
		$('#addExclusionRegionElement').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$Profile.Details($('#hiddenProfileId').val());
	};

	var createTableData = function (data, divName, id) {
		var template;
		data.Id = id;
		template = $App.LoadTemplate('templates/securityElementDataTable_template.html');
		$(divName).html(template(data));

	}
	var callbackDeleteProfile = function (data) {
		var template;
		template = $App.LoadTemplate('templates/profile_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Print Profile ';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';

		jsonData.display = "true";

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.DeleteProfile(jsonData.id, callbackDeleteProfileConfirm);
		})
	};

	var callbackUpdateProfile = function () {
		$App.DAlert('Profile Updated', 'Edit Profile', 'success');
		$('#editGeneralSettings').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$Profile.Details($('#hiddenProfileId').val());
	};

	var callbackCreateProfile = function () {
		$App.DAlert('Profile Created', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};
	
	var callbackCreateProfile = function () {
		$App.DAlert('Profile Updated', 'Edit Profile', 'success');
		routie('ListProfiles/');
	};

	
	var callbackDisplayDetailsProfile = function (data) {
		var template;
		var printTraceFormBucket = [],
		exclusionRegionFormBucket = [],
		securityElementsFormBucket = [];
		template = $App.LoadTemplate('templates/profile_template.html');

		var jsonData = {};
		jsonData.title = 'Print Profile Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';

		jsonData.display = "true";

		//jsonData.topNavBtnText


		//TO BE IMPLEMENTED//
		//Get list of Microprint Regions
		//$.ajax({
		//    url: $App.WebServiceRoot + "/api/MicroprintRegions",
		//    type: "GET",
		//    headers: {
		//        'authorization': 'bearer ' + $App.GetSecurity()
		//    },
		//    contentType: "application/json",
		//    cache: false,
		//    success: function (data) {
		//        var $select = $('#microprintRegions');
		//        $.each(data.microprintRegions, function (key, val) {
		//            $select.append('<option id="' + val.id + '">' + val.name + '</option>');
		//        })
		//    },
		//    error: function (data) {
		//        //$App.HideBusy();
		//        //$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
		//    }
		//});

		//Get list of Pantograph Regions
		//$.ajax({
		//    url: $App.WebServiceRoot + "/api/PantographRegions",
		//    type: "GET",
		//    headers: {
		//        'authorization': 'bearer ' + $App.GetSecurity()
		//    },
		//    contentType: "application/json",
		//    cache: false,
		//    success: function (data) {
		//        var $select = $('#pantographRegions');
		//        $.each(data.pantographRegions, function (key, val) {
		//            $select.append('<option id="' + val.id + '">' + val.name + '</option>');
		//        })
		//    },
		//    error: function (data) {
		//        //$App.HideBusy();
		//        //$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
		//    }
		//});

		//Get list of TROYMark Regions
		$.ajax({
			url : $App.WebServiceRoot + "/api/TroyMarkRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#troyMarkRegions');
				$.each(data.troyMarkRegions, function (key, val) {
					$select.append('<option id="' + val.id + '">' + val.name + '</option>');
				})
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

		//Get list of Image Regions
		$.ajax({
			url : $App.WebServiceRoot + "/api/ImageRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#imageRegions');
				$.each(data.imageRegions, function (key, val) {
					$select.append('<option id="' + val.id + '">' + val.name + '</option>');
				})
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

		//Get list of Textbox Regions
		$.ajax({
			url : $App.WebServiceRoot + "/api/TextBoxRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#textBoxRegions');
				$.each(data.textBoxRegions, function (key, val) {
					$select.append('<option id="' + val.id + '">' + val.name + '</option>');
				})
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

		//Get list of Print Trace Regions
		$.ajax({
			url : $App.WebServiceRoot + "/api/PrintTraceRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#printTraceElement');
				$.each(data.printTraceRegions, function (key, val) {
					$select.append('<option id="' + val.id + '">' + val.name + '</option>');
				})
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

		//Get list of Exclusion Regions
		$.ajax({
			url : $App.WebServiceRoot + "/api/ExclusionRegions",
			type : "GET",
			headers : {
				'authorization' : 'bearer ' + $App.GetSecurity()
			},
			contentType : "application/json",
			cache : false,
			success : function (data) {
				var $select = $('#excludeElement');
				$.each(data.exclusionRegions, function (key, val) {
					$select.append('<option id="' + val.id + '">' + val.name + '</option>');
				})
			},
			error : function (data) {
				//$App.HideBusy();
				//$App.CheckMessageStatus(result, 'Get ExclusionRegions List', 'error');
			}
		});

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		//	var printTraceFormBucket = [], exclusionRegionFormBucket=[], securityElementsFormBucket=[];
	
		if (data.regions.$values) {

			$(data.regions.$values).each(function (key, value) {

				var bucket = {};

				switch (value.regionType) {
				case 'DataCaptureRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					securityElementsFormBucket.push(bucket);
					break;
					//separate
				case 'ExclusionRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					exclusionRegionFormBucket.push(bucket);
					break;

				case 'ImageRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					securityElementsFormBucket.push(bucket);
					break;
					//separate
				case 'PrintTraceRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					printTraceFormBucket.push(bucket);

					break;
				case 'TextBoxRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					securityElementsFormBucket.push(bucket);

					break;
				case 'TroyMarkRegion':
					bucket.Name = value.name;
					bucket.Id = value.id;
					bucket.Type = value.regionType;
					bucket.Description = value.description;
					securityElementsFormBucket.push(bucket);

					break;

				}
			});

		}

		
		$('#container').html(template(jsonData));

		$('#hiddenProfileId').val(data.id);

		createTableData(securityElementsFormBucket, '#securityTableContainer', data.id);
		createTableData(printTraceFormBucket, '#printTraceTableContainer', data.id);
		createTableData(exclusionRegionFormBucket, '#exclusionTableContainer', data.id);

		$('#ProfileForm').find('input[type=text]').each(function () {
			$(this).prop('disabled', true);
		});

		$("#createProfileBtn").hide();

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.UpdateProfile(jsonData.id, obj, callbackUpdateProfile);
		});

		$('#securityElementsFormSubmit').on('click', function (e) {
			var y;
			e.preventDefault(e);
			var container = $('#addSecurityElement');
			container.find('#profileId').val(data.id);

			container.find('#regionId').val($('#troyMarkRegions option:selected').attr('id'));

			if (!container.find('#regionId').val()) {
				container.find('#regionId').val($('#imageRegions option:selected').attr('id'));
			}

			if (!container.find('#regionId').val()) {
				container.find('#regionId').val($('#textBoxRegions option:selected').attr('id'));
			}

			var obj = $('#securityElementsForm').serializeToJSON();
			$ProfileModels.AddElement(obj, callbackSecurityElementsFormSubmit);
		});

		$('#printTraceFormSubmit').on('click', function (e) {
			e.preventDefault(e);
			var container = $('#addPrintTraceElement');
			container.find('#profileId').val(data.id);
			container.find('#regionId').val($('#printTraceElement option:selected').attr('id'));

			var obj = $('#printTraceform').serializeToJSON();
			$ProfileModels.AddElement(obj, callbackPrintTraceFormSubmit);
		});

		$('#exclusionRegionFormSubmit').on('click', function (e) {

			e.preventDefault(e);
			var container = $('#addExclusionRegionElement');
			container.find('#profileId').val(data.id);
			container.find('#regionId').val($('#excludeElement option:selected').attr('id'));

			var obj = $('#exclusionRegionForm').serializeToJSON();
			$ProfileModels.AddElement(obj, callbackExclusionRegionFormSubmit);

		});

		$('#saveGeneralSettings').on('click', function (e) {
			var data = {};
			e.preventDefault(e);
			
			var container = $('#editGeneralSettings');
			data.name = container.find('#name').val();
			data.description = container.find('#description').val();
			data.id = $('#hiddenProfileId').val();

			$ProfileModels.UpdateProfile($('#hiddenProfileId').val(), data, callbackUpdateProfile);

		});

	};

	var callbackDisplayGetProfiles = function (data) {

		var template = $App.LoadTemplate('templates/profile_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create Profile';
		jsonData.buttonText = 'Create Profile';

		$('#container').html(template(data.profiles));

		$('#profilesListTable').DataTable();

	};

	var getProfiles = function () {};

	$Profile.Create = function () {

		var template = $App.LoadTemplate('templates/profile_template.html');

		var jsonData = {};
		jsonData.title = 'Create Print Profile';
		jsonData.buttonText = 'Create';
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$("#securityRegionsDiv").hide();
		$("#printTraceRegionsDiv").hide();
		$("#exclusionRegionsDiv").hide();
		$("#editGeneralSettingsBtn").hide();

		$('#ProfileSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ProfileForm').serializeToJSON();
			$ProfileModels.CreateProfile(obj, callbackCreateProfile);
		})
	};

	$Profile.Delete = function (id) {
		$ProfileModels.GetProfile(id, callbackDeleteProfile);
	};

	$Profile.List = function () {
		$ProfileModels.GetProfiles(callbackDisplayGetProfiles);
	};

	$Profile.DeleteElement = function (id) {
		var data = {};
		data.profileId = $('#hiddenProfileId').val();
		data.regionId = id;

		$ProfileModels.DeleteElement(data, callbackSecurityElementsDeleteFormSubmit);
	};

	$Profile.Details = function (id) {
		$ProfileModels.GetProfile(id, callbackDisplayDetailsProfile);
	};


	$Profile.Logout = function (id) {
		$App.ClearSession();
		routie('Main/');
	}

	window.$Profile = $Profile;
	return (this);
}
	());
