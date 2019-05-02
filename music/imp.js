var music = new Audio;
var song = "";
var playing = 0;

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
    }
}