var music = new Audio;
var song = "";
var playing = 0;
var slider = document.getElementById("myRange");
var sliders = document.getElementById("my1Range");
var output = document.getElementById("demo");
var minutes = 0;
var seconds = 0;

output.innerHTML = slider.value;

function pause() {
    music.pause();
    playing = 0;
}

function play(musi) {
    if (musi == song) {
        if (playing == 0) {
            music.play();
            playing = 1;            
        }
    } else if (musi != song) {
        music.pause();
        music = new Audio(musi);
        music.play();
        song = musi;
        playing = 1;
        music.volume = slider.value/100;
        document.getElementById("playing").innerHTML = song;

    }
}

slider.oninput = function() {
    music.volume = this.value/100;
    output.innerHTML = this.value;
}

sliders.oninput = function() {
    music.currentTime = (this.value*music.duration)/10000;
    if(playing == 0){
        music.play();
        music.currentTime = (this.value*music.duration)/10000;
        playing = 1;
    }
}
function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

var x = setInterval(function () {
    if (song != ""){
    document.getElementById("my1Range").value = (music.currentTime * 10000)/music.duration;

    minutes = Math.floor(music.currentTime/ 60);
    seconds = Math.floor(music.currentTime) - (minutes*60);
    document.getElementById("tipl").innerHTML = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

    minutes = Math.floor(music.duration/ 60);
    seconds = Math.floor(music.duration) - (minutes*60);
    document.getElementById("ftm").innerHTML = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    
}
    if((music.currentTime * 10000)/music.duration==10000){
        music.pause();
        playing = 0;
    }
}, 100);

x;