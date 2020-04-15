function sample(){
	alert('Hello from sample.js!');
}
function doubletoint(valueDouble){
	let valueInt = valueDouble|0;
	alert('Int number is: '+valueInt);
}
function doubletoroundedint(valueDouble){
	let roundedInt = (valueDouble + 0.5)|0;
	alert('roundedInt number is: '+roundedInt)
}
function strChange(str){
	let i = str|0 + 1;
	alert('NewString is: '+i);
}
