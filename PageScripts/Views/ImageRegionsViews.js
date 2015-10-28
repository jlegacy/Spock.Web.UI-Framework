(function () {

	var $ImageRegions = function () {};

	$ImageRegions.variables = {};

	var callbackImageRegionsDeleteConfirm = function (data) {
		$App.DAlert('ImageRegions Deleted', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};

	var callbackImageRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ImageRegions Updated', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};

	var callbackDeleteTraceRegionsUpdateConfirm = function (data, status) {
		$App.DAlert('ImageRegions Deleted', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};

	var callbackCreateImageRegions = function () {
		$App.DAlert('ImageRegions Created', 'Edit ImageRegions', 'success');
		routie('ListImageRegions/');
	};

	var displayScreenFields = function (data, readOnly) {
		$('#duplexMode').val(data.duplexMode);

		$('#imageAsBase64String').closest('span').show();

		$App.LoadCanvas('myCanvas', data.imageAsBase64String);

		$('input[id=imageAsBase64String]').change(function () {
			hiddenField = $('input[name="imageAsBase64String"]');
			$App.Base64EncodeFile('myCanvas', this.files, hiddenField);
		});

		if (readOnly === true) {
			$('#ImageRegionsForm').find('input[type=text]').each(function () {
				$(this).removeAttr('readonly');
			});
			$('#ImageRegionsForm').find('input').each(function () {
				$(this).prop('disabled', true);
			});
			$('#ImageRegionsForm').find('select').each(function () {
				$(this).prop('disabled', true);
			});
			
			$('#imageAsBase64String').closest('span').hide();

		}

	};

	var callbackDisplayEditImageRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Edit Image Element';
		jsonData.buttonText = 'Save';
		jsonData.editAttribute = '';
		jsonData.editAction = "edit";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		displayScreenFields(data, false);

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.UpdateImageRegions(jsonData.id, obj, callbackImageRegionsUpdateConfirm);
		})

	};

	var callbackDeleteImageRegions = function (data) {

		var template;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Delete Image Element';
		jsonData.buttonText = 'Delete';
		jsonData.editAttribute = 'readonly';
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		
		displayScreenFields(data, true);

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.DeleteImageRegions(jsonData.id, callbackImageRegionsDeleteConfirm);
		})

	};

	var callbackDisplayImageRegions = function (data) {

		var template;
		var elements;
		template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		jsonData.title = 'Image Element Details';
		jsonData.buttonText = 'Back';
		jsonData.editAttribute = 'readonly';
		jsonData.detailsAction = "details";
		jsonData.units = $.cookie('sessionUnits');

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));
		
		displayScreenFields(data, true);
	
		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			routie('ListImageRegions/');
		})

	};

	var callbackDisplayGetImageRegions = function (data) {

		var template = $App.LoadTemplate('templates/imageRegions_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create ImageRegions';
		jsonData.buttonText = 'Create ImageRegions';

		$('#container').html(template(data.imageRegions));

		$('#imageRegionsListTable').DataTable();

	};

	var getimageRegions = function () {};

	$ImageRegions.List = function () {
		var data = {};
		$ImageRegionsModels.GetImageRegions(data, callbackDisplayGetImageRegions);
	};

	$ImageRegions.Edit = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDisplayEditImageRegions);
	};

	$ImageRegions.Delete = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDeleteImageRegions);
	};

	$ImageRegions.Display = function (id) {
		$ImageRegionsModels.GetImageRegion(id, callbackDisplayImageRegions);
	};

	$ImageRegions.Create = function () {

		var template = $App.LoadTemplate('templates/imageRegions_template.html');

		var jsonData = {};
		var hiddenField;
		jsonData.title = 'Create Image Element';
		jsonData.buttonText = 'Create';
		jsonData.create = "true";
		jsonData.createAction = "create";
		jsonData.units = $.cookie('sessionUnits');
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('input[id=imageAsBase64String]').change(function () {
			hiddenField = $('input[name="imageAsBase64String"]');
			$App.Base64EncodeFile('myCanvas', this.files, hiddenField);
		});

		$('#ImageRegionsSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#ImageRegionsForm').serializeToJSON();
			$ImageRegionsModels.CreateImageRegions(obj, callbackCreateImageRegions);
		})
	};

	window.$ImageRegions = $ImageRegions;
	return (this);
}
	());
