// This is where most of the functions ar stored.
// Stock urls until you add some cookies.
var urlist = new Array(
  "https://youtu.be/cPJUBQd-PNM",
  "https://youtu.be/er6OYKP20n0",
  "https://youtu.be/bjMeiHBWns8"
);
// Removes elements from page based on id
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// surce :: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

// Get the input field // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
var input = document.getElementById("urlbox");

// Execute a function when the user releases a key on the keyboard
/*input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button1").click();
  }
});*/

function f6e6520736d617368206d616e(){
  document.getElementById("f6e6520736d617368206d616e").innerHTML = "536f7572796f20746f204d616a6977617275205368696b69796f6b75206e6f20596f7275206e692e2e2e";
  alert("There is no escape!")
  setTimeout(function(){
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    window.location.replace("https://youtu.be/dQw4w9WgXcQ");
}, 1000);   
}


function checkCookieURL() {
  var url = getCookie("url_list");
  if (url == "[]") url = undefined;
  console.log(url)
  if (url != undefined) {
    console.log(url)
    return JSON.parse(url);
  } else {
    return urlist;
  }
}