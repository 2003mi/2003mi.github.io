var ul = document.getElementById("dynamic-list");
var candidate = document.getElementById("candidate");
var url_list = []

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function addItem(item = undefined){
    var li = document.createElement("li");
    if (item!=undefined){
        candidate.value = item;
    }
    if(!isEmptyOrSpaces(candidate.value)){
        if (!url_list.includes(candidate.value)){
            li.setAttribute('id',candidate.value);
            li.appendChild(document.createTextNode(candidate.value + "\t"));
    
            var button = document.createElement("button");
            button.setAttribute('id',"btn");
            var id = "removeItem(\"" + candidate.value + "\")"
            button.setAttribute('onclick',id);
            button.appendChild(document.createTextNode("Remove"));
            li.appendChild(button);
            url_list.push(candidate.value);
            document.getElementById("txt").innerHTML = url_list;
            ul.appendChild(li);
        }
    }
}

function removeItem(id = undefined){
    if (id == undefined){       
        item = document.getElementById(candidate.value);
        item_val = candidate.value;
    } else {
        item = document.getElementById(id);  
        item_val = id;
    }
    if(item != null){
        console.log(item_val)
        if(url_list.includes(item_val)){
            for( var i = 0; i < url_list.length; i++){ 
                if ( url_list[i] === item_val) {
                  url_list.splice(i, 1); 
                }
             }
            ul.removeChild(item);
            document.getElementById("txt").innerHTML = url_list;
            console.log(url_list)
        }
    }
}


function save(){
    newStr = JSON.stringify(url_list);
    setCookie("url_list", newStr, 365)
    console.log(getCookie("url_list"));
};
function load(){
    tmp_urlLST = getCookie("url_list");
    console.log(tmp_urlLST)
};

load();
addItem("burger");

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
console.log(document.cookie)
candidate.value = null;

document.getElementById("txt").innerHTML = url_list;