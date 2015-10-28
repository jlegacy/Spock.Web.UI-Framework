$(document).ready(function () {
	routie({
		'' : function (id) {
			$Main.Init();
		},
		'submitMe/?:data' : function (data) {
			$Index.UpdateView(JSON.parse(data));
		},
		'Main/?:id' : function (id) {
			$Main.Init(id);
		},
		'Main' : function (id) {
			$Main.Init();
		},
/*Users*/		
		'CreateUser' : function () {
			$User.Create();
		},
		'EditUser/:id' : function (id) {
			$User.Edit(id);
		},
		'DisplayUser/:id' : function (id) {
			$User.Edit(id, true);
		},
		'DeleteUser/:id' : function (id) {
			$User.Delete(id);
		},
		'Logon' : function () {
			$User.Login();
		},
		'ListUsers' : function () {
			$User.List();
		},
		'UserChangePassword/:id' : function (id) {
			$User.UserChangePassword(id);
		},
		'ResetPassword/:id' : function (id) {
			$User.ResetPassword(id);
		},
		'Logout' : function () {
			$User.Logout();
		},
/*Applications*/
		'ListApplications' : function () {
			$Application.List();
		},
		'EditPrintApplication/:id' : function (id) {
			$Application.Edit(id);
		},
		'DisplayPrintApplication/:id' : function (id) {
			$Application.Display(id);
		},
/*Profile Views*/
		'CreateProfile' : function () {
			$Profile.Create();
		},
		'EditProfile/:id' : function (id) {
			$Profile.Edit(id);
		},
		'DetailsProfile/:id': function (id) {
		    $Profile.Details(id);
		},
		'DeleteProfile/:id' : function (id) {
			$Profile.Delete(id);
		},
		'ListProfiles' : function () {
			$Profile.List();
		},
		'DeleteElement/:id' : function (id) {
			$Profile.DeleteElement(id);
		},
/*Print Trace Views*/
		'CreatePrintTraceRegions' : function () {
			$PrintTraceRegions.Create();
		},
		'EditPrintTraceRegions/:id' : function (id) {
			$PrintTraceRegions.Edit(id);
		},
		'DisplayPrintTraceRegions/:id': function (id) {
		    $PrintTraceRegions.Display(id);
		},
		'DeletePrintTraceRegions/:id' : function (id) {
			$PrintTraceRegions.Delete(id);
		},
		'ListPrintTraceRegions' : function () {
			$PrintTraceRegions.List();
		},
/*Image Views*/
		'CreateImageRegions' : function () {
			$ImageRegions.Create();
		},
		'EditImageRegions/:id' : function (id) {
			$ImageRegions.Edit(id);
		},
		'DisplayImageRegions/:id': function (id) {
		    $ImageRegions.Display(id);
		},
		'DeleteImageRegions/:id' : function (id) {
			$ImageRegions.Delete(id);
		},
		'ListImageRegions' : function () {
			$ImageRegions.List();
		},
/*Custom Error Pages*/
		'Error400' : function () {
			$CustomErrors.Display(400);
		},
		'Error401' : function () {
			$CustomErrors.Display(401);
		},
		'Error402' : function () {
			$CustomErrors.Display(402);
		},
/*System Settings Pages*/
		'ListSystemSettings' : function () { 
			$SystemSettings.List();
		},
		'AddLicenseSystemSettings' : function () {
			$SystemSettings.AddLicense();
		},
		'EditLanguageSystemSettings' : function () {
			$SystemSettings.UpdateLanguage();
		},
/*Exclusion Region Views*/
		'CreateExclusionRegions' : function () {
			$ExclusionRegions.Create();
		},
		'EditExclusionRegions/:id' : function (id) {
			$ExclusionRegions.Edit(id);
		},
		'DisplayExclusionRegions/:id': function (id) {
		    $ExclusionRegions.Display(id);
		},
		'DeleteExclusionRegions/:id' : function (id) {
			$ExclusionRegions.Delete(id);
		},
		'ListExclusionRegions' : function () {
			$ExclusionRegions.List();
		},
/*DataCapture Region Views*/
		'CreateDataCaptureRegions' : function () {
			$DataCaptureRegions.Create();
		},
		'EditDataCaptureRegions/:id' : function (id) {
			$DataCaptureRegions.Edit(id);
		},
		'DisplayDataCaptureRegions/:id': function (id) {
		    $DataCaptureRegions.Display(id);
		},
		'DeleteDataCaptureRegions/:id' : function (id) {
			$DataCaptureRegions.Delete(id);
		},
		'ListDataCaptureRegions' : function () {
			$DataCaptureRegions.List();
		},
/*TextBox Region Views*/
		'CreateTextBoxRegions' : function () {
			$TextBoxRegions.Create();
		},
		'EditTextBoxRegions/:id' : function (id) {
			$TextBoxRegions.Edit(id);
		},
		'DisplayTextBoxRegions/:id': function (id) {
		    $TextBoxRegions.Display(id);
		},
		'DeleteTextBoxRegions/:id' : function (id) {
			$TextBoxRegions.Delete(id);
		},
		'ListTextBoxRegions' : function () {
			$TextBoxRegions.List();
		},
/*TroyMark Region Views*/
		'CreateTroyMarkRegions' : function () {
			$TroyMarkRegions.Create();
		},
		'EditTroyMarkRegions/:id' : function (id) {
			$TroyMarkRegions.Edit(id);
		},
		'DisplayTroyMarkRegions/:id': function (id) {
		    $TroyMarkRegions.Display(id);
		},
		'DeleteTroyMarkRegions/:id' : function (id) {
			$TroyMarkRegions.Delete(id);
		},
		'ListTroyMarkRegions' : function () {
			$TroyMarkRegions.List();
		},
/*MicroPrint Region Views*/
		'CreateMicroPrintRegions' : function () {
			$MicroPrintRegions.Create();
		},
		'EditMicroPrintRegions/:id' : function (id) {
			$MicroPrintRegions.Edit(id);
		},
		'DisplayMicroPrintRegions/:id': function (id) {
		    $MicroPrintRegions.Display(id);
		},
		'DeleteMicroPrintRegions/:id' : function (id) {
			$MicroPrintRegions.Delete(id);
		},
		'ListMicroPrintRegions' : function () {
			$MicroPrintRegions.List();
		},
/*Pantograph Region Views*/
		'CreatePantographRegions' : function () {
			$PantographRegions.Create();
		},
		'EditPantographRegions/:id' : function (id) {
			$PantographRegions.Edit(id);
		},
		'DisplayPantographRegions/:id': function (id) {
		    $PantographRegions.Display(id);
		},
		'DeletePantographRegions/:id' : function (id) {
			$PantographRegions.Delete(id);
		},
		'ListPantographRegions' : function () {
			$PantographRegions.List();
		}
	});
});
