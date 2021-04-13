function init(){
	
	var alertbutton = document.getElementById("entrybutton");
	var input = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
	
	alertbutton.addEventListener('click', function() {
		alert('Leah Patton: ' + input.value);
		output.innerHTML = input.value;
	});
	
}
window.addEventListener('load', init);