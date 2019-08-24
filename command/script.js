var input = document.getElementById('myTextInput');
var list = document.getElementById('history');
input.focus();
input.select();

/*var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Green");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
node.setAttribute('style', "color: green;") 
list.appendChild(node);     // Append <li> to <ul> with id="myList"*/


// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      dotask();
    }
  });
  
function dotask(){
    var inval = input.value;
    input.value = ""; 
    additem(inval);
    input.focus();
    input.scrollIntoView();
    command(inval);
}

function additem(textval, color = "white", class_ = ""){
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(textval);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    if(color != "white"){
        colora = "color: " + color + ";"
        node.setAttribute('style', colora) 
    }
    if(class_ != ""){
        node.setAttribute('class', class_) 
    }
    list.appendChild(node);     // Append <li> to <ul> with id="myList"
}

function command(cmda){
    if(cmda == "Hello world!"){
        additem("yay", "lightgreen", "m")
    }
    if (cmda.startsWith("color ")){
        var tmp = cmda.replace('color ','');
        additem("You got this color", tmp)
    }
    if (cmda.startsWith("url ")){
        var tmp = cmda.replace('url ','');
        window.open(tmp)
    }
    if (cmda.startsWith("exit")){
        window.location.href = "https://2003mi.github.io/";
        window.location.replace("https://2003mi.github.io/");
    }
}