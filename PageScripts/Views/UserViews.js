(function () {

	var $User = function () {};

	$User.variables = {};

	var callbackDeleteUserConfirm = function (data) {
		$App.DAlert('User Deleted', 'Edit User', 'success');
		routie('ListUsers/');
	};

	var callbackUserChangePassword = function (data, status) {
		$App.DAlert('Password Changed', 'User Password', 'success');
		routie('ListUsers/');
	};

	var callbackResetPassword = function (data, status) {
		$App.DAlert('Password Reset', 'User Password', 'success');
		routie('ListUsers/');
	};

	var callbackUserLogin = function (data, status) {
		$App.GlobalUserSettings = data;
		$App.SetSession(data.access_token);
		routie('Main/' + data.requestId);
	};

	var callbackDeleteUser = function (data) {
		var template;
		template = $App.LoadTemplate('templates/user_template.html');

		var jsonData = {};
		jsonData.title = 'Delete User';
		jsonData.buttonText = 'Delete';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;
		
		$('#container').html(template(jsonData));
	    //Disable all Textboxes//
		$('input[type=text]').each(function () {
		    $(this).prop('disabled', true);
		});

		$('#UserSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#UserForm').serializeToJSON();
			$UserModels.DeleteUser(jsonData.id, callbackDeleteUserConfirm);
		})
	};

	var callbackUpdateUser = function () {
		$App.DAlert('User Updated', 'Edit User', 'success');
		routie('ListUsers/');
	};

	var callbackCreateUser = function () {
		$App.DAlert('User Created', 'Edit User', 'success');
		routie('ListUsers/');
	};

	var callbackDisplayEditUser = function (data, status) {
		var template;

		template = $App.LoadTemplate('templates/user_template.html');
		var jsonData = {};
		jsonData.title = 'Edit User';
		jsonData.buttonText = 'Save';

		$.extend(jsonData, data);
		jsonData.drop = $dropDataPlugin.drop;
	
		$('#container').html(template(jsonData));

		$('#UserSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#UserForm').serializeToJSON();
			$UserModels.UpdateUser(jsonData.id, obj, callbackUpdateUser);
		})

	};

	var callbackDisplayGetUsers = function (data, status) {
		var template = $App.LoadTemplate('templates/user_list_template.html');

		var jsonData = {};
		jsonData.title = 'Create User';
		jsonData.buttonText = 'Create User';

		$('#container').html(template(data.users));

		$('#usersListTable').DataTable();

	};

	var getUsers = function () {};

	$User.Create = function () {

		var template = $App.LoadTemplate('templates/user_template.html');

		var jsonData = {};
		jsonData.title = 'Create User';
		jsonData.buttonText = 'Create User';
		jsonData.create = "true";
		jsonData.drop = $dropDataPlugin.drop;

		$('#container').html(template(jsonData));

		$('#UserSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#UserForm').serializeToJSON();
			$UserModels.CreateUser(obj, callbackCreateUser);
		})
	};

	$User.Delete = function (id) {
		$UserModels.GetUser(id, callbackDeleteUser);
	};

	$User.List = function () {
		$UserModels.GetUsers(callbackDisplayGetUsers);
	};

	$User.Edit = function (id) {
		$UserModels.GetUser(id, callbackDisplayEditUser);
	},

	$User.Login = function () {
		
		
		var template;
		template = $App.LoadTemplate('templates/login_template.html');

		$('#container').html(template());
		$('#navArea').hide();

		$('#submitSecurity').on('click', function (e) {
			e.preventDefault();
			var obj = $('#securityForm').serializeToJSON();

			$.when($UserModels.GetToken(obj)).done(function (data1) {

				if (data1.access_token) {
					$App.SetUserSession(data1);
				}
				$.when($SystemSettingsModels.GetSystemSettingsInitial()).done(function (data2) {
					if (data1.access_token && data2.version) {
					    $App.SetSystemSession(data2);
					    $('#navArea').show();
					    routie('Main/');
					} else {
						$App.DAlert('Authority Invalid', 'Create Error', 'error');
						routie('Main/');
					}

				});
			});
		});
	},

	$User.UserChangePassword = function (id) {
		var template;

		template = $App.LoadTemplate('templates/user_change_password.html');

		var jsonData = {};
		jsonData.title = 'Change Password';
		jsonData.buttonText = 'Change';

		$('#container').html(template(jsonData));

		$('#UserChangePasswordSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#UserChangePasswordForm').serializeToJSON();
			$UserModels.UserChangePassword(id, obj, callbackUserChangePassword);
		})
	},

	$User.ResetPassword = function (id) {

		var template;
		template = $App.LoadTemplate('templates/user_change_password.html');

		var jsonData = {};
		jsonData.title = 'Reset Password';
		jsonData.buttonText = 'Reset';
		jsonData.admin = true;

		$('#container').html(template(jsonData));

		$('#UserChangePasswordSubmit').on('click', function (e) {
			e.preventDefault(e);
			var obj = $('#UserChangePasswordForm').serializeToJSON();
			$UserModels.ResetPassword(id, obj, callbackResetPassword);
		})

	},

	$User.Logout = function (id) {
	    $App.ClearSession();
	    $('#navArea').hide();
		routie('Logon/');
	}

	window.$User = $User;
	return (this);
}
	());
