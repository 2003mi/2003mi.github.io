var click1 = 0
var i = 1

console.log("Java script game1.1 ready. click1=" + click1);

function click1f() {
	var budio = new Audio('../resources/music/spagett.wav');
	budio.play();

	click1 = click1 + 1
	document.getElementById("click1").innerHTML=click1;
}
