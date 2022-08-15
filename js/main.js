var btn = document.getElementById('burger');
var menu = document.getElementById('mobile_menu');

btn.onclick = function func(){

	if (menu.style.display == 'block') {
		menu.style.display = 'none';
	}
	else{
		menu.style.display = 'block';
	}

}
