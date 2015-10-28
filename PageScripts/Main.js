(function () {

	var $Main = function () {};

	$Main.Init = function (id) {
		var template;
		var pdata = {};
		pdata.id = id;

		$App.CheckSecurity();
		
		//template = $App.LoadTemplate('templates/main_template.html');
//		template = $App.LoadTemplate('templates/application_list_template.html');
		var navTemplate = $App.LoadTemplate('templates/navigation_template.html');

		$('#navArea').html(navTemplate(pdata));
		routie('ListApplications/');
	}

	window.$Main = $Main;
	return (this);
}
	());
