/*m = Math.floor(Math.random() * 3);
console.log(m)


function load(x){
    window.location.href = x;
    window.location.replace(x);
}

if(m==0){
    load("https://youtu.be/cPJUBQd-PNM")
} else if(m==1){
    load("https://youtu.be/er6OYKP20n0")
} else if(m==2){
    load("https://youtu.be/bjMeiHBWns8")
}*/
google.load('search', '1');
google.setOnLoadCallback(OnLoad);
var search;

//i suggest instead of this to make keywords list so first to pick random keyword than to do search and pick random image
var keyword = 'furry';

function OnLoad()
{
    search = new google.search.ImageSearch();

    search.setSearchCompleteCallback(this, searchComplete, null);

    search.execute(keyword);
}

function searchComplete()
{
    if (search.results && search.results.length > 0)
    {
        var rnd = Math.floor(Math.random() * search.results.length);

        //you will probably use jQuery and something like: $('body').css('background-image', "url('" + search.results[rnd]['url'] + "')");
        document.body.style.backgroundImage = "url('" + search.results[rnd]['url'] + "')";
    }
}




var urls = new Array(
    "https://youtu.be/cPJUBQd-PNM",
    "https://youtu.be/er6OYKP20n0",
    "https://youtu.be/bjMeiHBWns8"
);

var i;
for (i = 0; i < 1; i++) { 
    var random = Math.floor(Math.random()*urls.length);
    console.log(urls[random])
    document.write("<a href=", urls[random], ">", urls[random], "</a>", "<br>");

    setTimeout(function(){
        window.location.href = urls[random];
        window.location.replace(urls[random]);
     }, 500);
}


