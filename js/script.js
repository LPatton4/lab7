function init(){
	
	var entrybutton = document.getElementById("entrybutton");
	var input = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
	
	entrybutton.addEventListner("click", alertFunction(){
		input.innerHTML = output;
		alert('Leah Patton: ' + input);
	});

}
window.addEventListener('load', init);