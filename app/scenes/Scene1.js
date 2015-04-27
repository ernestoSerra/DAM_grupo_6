alert('SceneScene1.js loaded');

function SceneScene1() {

};

SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	//session_id = localStorage.getItem('session_id');//comentar para no loguearse al inicio de la app
	sesion_id='';
	alert(session_id);
	if(session_id==''){
		$('#svecKeyHelp_vhg4').sfKeyHelp({
			'green':'Identificarse'
		});
	}else{
		$('#svecKeyHelp_vhg4').sfKeyHelp({
			'red':'Cerrar sesión',
		});
	}
	
};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
	pantallaActual='Scene1';
	$('#principal div.col-xs-4').keynav();
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene1.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene1.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

