var sMusic = new Audio('resources/music/ddbjbgvsjhbgvjzxdhkgjhkzjyhjkasbgfexhk.gjxg.wav');
var nopeN = 0

function ssMusic() {
	sMusic.play();
}
function sNope() {
	var budio = new Audio('resources/music/nope.mp3');
	sMusic.pause();
	budio.play();
	nopeN = nopeN + 1
	document.getElementById("nope").innerHTML="Nope! ";
	document.getElementById("nopeN").innerHTML=nopeN;
}
function open1() {
window.open("sides/dab .html");
}