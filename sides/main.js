// Stock urls until you add some cookies.
var urls = new Array(
    "https://youtu.be/cPJUBQd-PNM",
    "https://youtu.be/er6OYKP20n0",
    "https://youtu.be/bjMeiHBWns8"
);


// Gets params that was sent with the url
url = getAllUrlParams().url;
fetch = getAllUrlParams().fetch;
redirect = getAllUrlParams().redirect;

// if the params is valid then store them in a cookie for use later
if(url != undefined) {
    console.log(url)

} else if (fetch == "true"){
    removeElement("main")
    // Gets the cookies and displays them on the wabpage
    console.log(fetch)
    document.write("<p id='load'>Fetching cookies...</p>");
    setTimeout(function(){
        removeElement("load")
    }, 1000);   

        // if you come from q/index.html then rederect to random page
} else if(redirect == "true") {
    removeElement("main")
    // Gets an random items from either stock urls or the cookies that is stored.
    var random = Math.floor(Math.random()*urls.length);
    // delets main and replazes it with url that will be rederected to.
    //removeElement("main")
    document.write("<a href=", urls[random], ">", urls[random], "</a>", "<br>");
    window.location.href = urls[random];
    window.location.replace(urls[random]);
} else {

}

function submit(){
    var link = urlbox.value;

    if(link=="owo"){
        removeElement("main")
        document.write("<div id='4f6e6520736d617368206d616e'>");
        document.write("<h1 id='f6e6520736d617368206d616e'>One smash man</h1>", "<br>");
        document.write('<img src="4f6e6520736d617368206d616e.png" alt="Ho gad" height="300" width="251" title="One smash man"/>', '<br>');
        document.write('<input type="button" onclick="f6e6520736d617368206d616e()" value="Escape" id="button1"></input>', '<br>\n</div><script src="function.js"></script>');     
    } else{
        var getvalid = validURL(link);
        document.getElementById("txt").innerHTML = link + " is " + getvalid;
    };
};

