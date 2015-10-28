(function () {
	var $App = function () {};

	$App.PrintTraceRegionsTextStringTypes = [];
	$App.PrintTraceRegionsTextStringTypes.push({
		text : "Static Block",
		value : 0
	});
	$App.PrintTraceRegionsTextStringTypes.push({
		text : "Job Data",
		value : 2
	});
	$App.PrintTraceRegionsTextStringTypes.push({
		text : "Line Feed",
		value : 3
	});

	$App.OtherTraceRegionsTextStringTypes = [];
	$App.OtherTraceRegionsTextStringTypes.push({
		text : "Static Block",
		value : 0
	});
	$App.OtherTraceRegionsTextStringTypes.push({
		text : "Dynamic Block",
		value : 1
	});
	$App.OtherTraceRegionsTextStringTypes.push({
		text : "Line Feed",
		value : 3
	});

	$App.textStringValues = [];
	$App.textStringValues.push({
		text : "Username",
		value : 0
	});
	$App.textStringValues.push({
		text : "Date",
		value : 1
	});
	$App.textStringValues.push({
		text : "Document Name",
		value : 2
	});
	$App.textStringValues.push({
		text : "Printer Name",
		value : 3
	});
	$App.textStringValues.push({
		text : "Printer Port Name",
		value : 4
	});
	$App.textStringValues.push({
		text : "Printer Server Name",
		value : 5
	});
	$App.textStringValues.push({
		text : "Printer Share Name",
		value : 6
	});
	$App.textStringValues.push({
		text : "Printer Comment",
		value : 7
	});
	$App.textStringValues.push({
		text : "Printer Location",
		value : 8
	});
	$App.textStringValues.push({
		text : "Printer Parameters",
		value : 9
	});
	$App.textStringValues.push({
		text : "Machine Name",
		value : 10
	});

	var parseErrorMessage = function (errors) {
		var errObj = {};
		var jQueryDomElementMessage = "";

		errObj = JSON.parse(errors);

		_.each(errObj, function (value, key) {
			jQueryDomElementMessage += value;
		});

		return jQueryDomElementMessage;
	}

	var SetFieldErrors = function (errors) {
		var errObj = {};
		var escapedFieldName;
		var javaScriptDomElement;
		var jQueryDomElementMessage;
		var lineLabel;
		var element;

		errObj = JSON.parse(errors);

		_.each(errObj, function (value, key) {
			element = $(document.getElementsByName(key));
			if (element.length > 0) {
				element.addClass('error');
				lineLabel = element.attr('errorName');
				jQueryDomElementMessage = '<br><label class="errorText">' + lineLabel + ' - ' + value[0] + '</label>';
				
				if (value[0]) {
					$.each(value, function (i, val) {
						jQueryDomElementMessage = '<br><label class="errorText">' + lineLabel + ' - ' + val + '</label>';
						$('#errorPanel').append(jQueryDomElementMessage);
					});
				}

				if (!value[0]) {
					$.each(value.$values, function (i, val) {
						jQueryDomElementMessage = '<br><label class="errorText">' + lineLabel + ' - ' + val + '</label>';
						$('#errorPanel').append(jQueryDomElementMessage);
					});
				}
				
			} else {
				if (key.toLowerCase().indexOf("textelements") >= 0) {
					$('#Strings').addClass('error');
					$.each(value.$values, function (i, val) {
						jQueryDomElementMessage = '<br><label class="errorText">Text Strings -' + val + '</label>';
						$('#errorPanel').append(jQueryDomElementMessage);
					});
				}
			}

		});
	};

	$App.State = {};

	$App.testMethod = function () {};

	$App.LoadTemplate = function (path) {
		var data;
		var template = {};
		$.ajax({
			url : path,
			async : false,
			dataType : "text",
			success : function (data) {
				template = Handlebars.compile(data);
			},
			error : function (data) {
				console.log(data);
			}
		});

		return template;
	},
	
	$App.trimLeadZero = function(s) {
                        return s.replace(/^0+/, "");
                    };

	$App.Base64EncodeFile = function (id, pfile, hiddenTargetField) {

		if (!pfile.length) {
			alert('Please select a file!');
			return;
		}

		var file = pfile[0];
		//var start = 0;
		//var stop = file.size - 1;

		var reader = new FileReader();

		// If we use onloadend, we need to check the readyState.
		reader.onloadend = function (evt) {
			if (evt.target.readyState == FileReader.DONE) { // DONE == 2
				$App.LoadCanvas(id, evt.target.result);
				hiddenTargetField.val(evt.target.result);
			}
		};

		reader.readAsDataURL(file);
	},

	$App.LoadCanvas = function (id, dataURL) {

		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');

		// load image from data url
		var imageObj = new Image();
		imageObj.onload = function () {
			context.drawImage(this, 0, 0);
		};

		imageObj.src = dataURL;
	}

	$App.CheckMessageStatus = function (result, title, type) {
		//reset fields//
		var messages = "";
		$('.error').removeClass("error");
		$('#errorPanel').empty();

		switch (result.status) {
		case 400:
			if (parseErrorMessage(result.responseText) === 'License Expired' || parseErrorMessage(result.responseText) === 'Invalid License') {
				$App.DAlert(parseErrorMessage(result.responseText), title, type);
				routie('Error400/');
			} else {
				$App.DAlert('Fix Errors in Fields', title, type);
				SetFieldErrors(result.responseText);
			}
			break;
		case 500:
			$App.DAlert('Unexpected Server Error - Status 500', title, type);
			break;
		case 401:
			$App.ClearSession();
			routie('Error401/');
			break;
		case 402:
			$App.ClearSession();
			routie('Error402/');
			break;
		case 404:
			$App.ClearSession();
			routie('Error404/');
			break;
		case 409:
			$App.DAlert('Conflict - Name already Exists', 'Create Error', 'error');
			break;
		case 200:
			$App.DAlert(result.responseText, title, type);
			break;
		case 0:
			$App.DAlert('Unexpected Server Error - Status 0', title, type);
			break;
		default:
			$App.DAlert(parseErrorMessage(result.responseText), title, type);
			routie('Main/');
		}
	},

	$App.DAlert = function (message, title, type) {

		if (type === "warning") {

			$.growl.notice({
				message : message
			});
		};

		if (type === "error") {

			$.growl.error({
				message : message
			});

		};

		if (type === "success") {

			$.growl.notice({
				message : message
			});

		};
	},

	$App.CheckSecurity = function () {
		if (!$.cookie('sessionSecurity') || !$.cookie('sessionUserName')) {
			routie('Logon/');
		}
	},

	$App.ShowBusy = function () {
		$('#busy').show();
	},

	$App.HideBusy = function () {
		$('#busy').hide();
	},

	$App.GetSecurity = function () {
		return $.cookie('sessionSecurity');
	},

	$App.SetUserSession = function (data) {
		$.cookie('sessionSecurity', data.access_token, {
			expires : 1
		});
		$.cookie('sessionRole', data.role, {
			expires : 1
		});
		$.cookie('sessionUserName', data.userName, {
			expires : 1
		});
		$.cookie('sessionUserId', data.requestId, {
			expires : 1
		});
	},

	$App.SetSystemSession = function (data) {

		$.cookie('sessionUnits', data.units, {
			expires : 1
		});
		$.cookie('sessionLanguage', data.language, {
			expires : 1
		});
	},

	$App.ClearSession = function () {
		$.cookie('sessionSecurity', null);
		$.removeCookie('sessionSecurity', {
			path : '/'
		});
		$.cookie('sessionRole', null);
		$.removeCookie('sessionRole', {
			path : '/'
		});
		$.cookie('sessionUserName', null);
		$.removeCookie('sessionUserName', {
			path : '/'
		});
		$.cookie('sessionUserName', null);
		$.removeCookie('sessionSecurity', {
			path : '/'
		});
		$.cookie('sessionUserId', null);
		$.removeCookie('sessionUserId', {
			path : '/'
		});
		$.cookie('sessionUnits', null);
		$.removeCookie('sessionUnits', {
			path : '/'
		});
		$.cookie('sessionLanguage', null);
		$.removeCookie('sessionLanguage', {
			path : '/'
		});

	},

	//	$App.WebServiceRoot = "http://localhost:56119";
	$App.WebServiceRoot = "http://10.30.0.127/spock";
	
	window.$App = $App
		return (this);
}
	());
