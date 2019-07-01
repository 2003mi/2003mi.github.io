// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function toggleMute() {
if(video.muted){
    video.muted = false;
  } else {
    video.muted = true;
  }

}

video.pause();
document.addEventListener('click', m);

function m(){
    if (video.paused) {
        console.log("ASS")
        video.muted = false; 
        video.play();
        btn.innerHTML = "Pause";
        removeElement("myAss");
        removeElement("fag");
        document.removeEventListener("click", m);
      }
    }


    function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }
    