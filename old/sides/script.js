var ul = document.getElementById("dynamic-list");
var candidate = document.getElementById("candidate");
var url_list = []

//Fuctions to check if input is not blank or valid
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function addItem(item = undefined) {
    var li = document.createElement("li");
    if (item != undefined) {
        candidate.value = item;
    }
    if (!isEmptyOrSpaces(candidate.value)) {
        if (validURL(candidate.value)) {
            if (!url_list.includes(candidate.value)) { 
                tmphttp = candidate.value;
                if (!tmphttp.startsWith("http://") && !tmphttp.startsWith("https://") && !tmphttp.startsWith("ftp://")){
                    candidate.value = "http://" + candidate.value; 
                };

                delete tmphttp;
                var a = document.createElement("a");
                a.appendChild(document.createTextNode(candidate.value + "\t"));
                a.setAttribute('href', candidate.value);
                a.setAttribute('target', "_blank");

                li.setAttribute('id', candidate.value);
                //li.appendChild(document.createTextNode(candidate.value + "\t"));
                li.appendChild(a);

                var button = document.createElement("button");
                button.setAttribute('id', "btn");
                var id = "removeItem(\"" + candidate.value + "\")"
                button.setAttribute('onclick', id);
                button.appendChild(document.createTextNode("Remove"));
                li.appendChild(button);

                url_list.push(candidate.value);
                document.getElementById("txt").innerHTML = url_list;
                ul.appendChild(li);
                document.getElementById("txt").innerHTML = "";
            } else {
                document.getElementById("txt").innerHTML = "What the item was not in the list! How?";
            }
        } else {
            document.getElementById("txt").innerHTML = "String is not an valid URL!";
        }
    } else {
        document.getElementById("txt").innerHTML = "Input cant be blank.";
    }
}

function removeItem(id = undefined) {
    if (id == undefined) {
        tmphttp = candidate.value;
        if (!tmphttp.startsWith("http://") && !tmphttp.startsWith("https://") && !tmphttp.startsWith("ftp://")){
            candidate.value = "http://" + candidate.value; 
        };
        delete tmphttp;
        item = document.getElementById(candidate.value);
        item_val = candidate.value;
    } else {
        item = document.getElementById(id);
        item_val = id;
    }
    if (item != null) {
        console.log(item_val)
        if (url_list.includes(item_val)) {
            for (var i = 0; i < url_list.length; i++) {
                if (url_list[i] === item_val) {
                    url_list.splice(i, 1);
                }
            }
            ul.removeChild(item);
        }
    }
}

function save() {
    newStr = JSON.stringify(url_list);
    document.cookie = "url_list=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("url_list", newStr, 365)
    console.log(getCookie("url_list"));
};
function load() {
    tmp_urlLST = JSON.parse(getCookie("url_list"));
    for (let i = 0; i < tmp_urlLST.length; i++) {
        addItem(tmp_urlLST[i])
    };
};

// Execute a function when the user releases a key on the keyboard
candidate.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add").click();
  }
});

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function saveatry(){
    if(candidate.value == "owo"){
        removeElement("main")
        document.write("<div id='4f6e6520736d617368206d616e'>");
        document.write("<h1 id='f6e6520736d617368206d616e'>One smash man</h1>", "<br>");
        document.write('<img src="4f6e6520736d617368206d616e.png" alt="Ho gad" height="300" width="251" title="One smash man"/>', '<br>');
        document.write('<input type="button" onclick="f6e6520736d617368206d616e()" value="Escape" id="button1"></input>', '<br>\n</div><script src="function.js"></script>');   
    }else{
        save()
        window.open("q.html?redirect=true");
    }

}
load();
candidate.value = null;
