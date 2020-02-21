function meme(url = 'https://www.minecraft.net/content/dam/archive/og-image/index-hero-og.jpg'){
    var node = document.createElement("LI");                 // Create a <li> node
    var img = document.createElement("img");  
    img.setAttribute('src', url)  
    node.appendChild(img);                              // Append the text to <li>
    node.setAttribute('class', 'none') 
    list.appendChild(node);     // Append <li> to <ul> with id="myList"
}

function cls(){
    const myNode = document.getElementById("history");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

function open(){
 creatopen_upload();
 input.disabled = true;
 input_li.style.display = "none";
};

function open_done(files){
  input_li.style.display = "block";
  input.disabled = false;
  var fullPath = document.getElementById('file-upload-li-ul-body-input').value;

  if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
}
  removeElement("file-upload-li-ul-body-input.li");
  additem("Opening: " + filename, "lightgreen", "m")

  const reader = new FileReader();
  reader.onload = function (){
      if( filetype == "img"){
        meme(reader.result);
        filetype = "";
      } else {
        const lines = reader.result.split('\n').map(function (line){
          additem(line, "white", "none")
        })
      }
  };
  
  if(filename.toLowerCase().endsWith(".jpg") || filename.toLowerCase().endsWith(".ico") || filename.toLowerCase().endsWith(".png")){
    reader.readAsDataURL(files[0]);
    filetype = "img"
  } else {
    reader.readAsText(files[0]);
  }
  

}

function creatopen_upload(){
  var node = document.createElement("LI");                 // Create a <li> node
  var input = document.createElement("input");  
  input.setAttribute('id', 'file-upload-li-ul-body-input')  
  input.setAttribute('type', 'file'); 
  node.appendChild(input);   
  node.setAttribute('class', 'none') 
  node.setAttribute('id', 'file-upload-li-ul-body-input.li') 
  list.appendChild(node);     // Append <li> to <ul> with id="myList"

  const inputbox2 = document.querySelector('input[type="file"]')
  inputbox2.addEventListener('change', function (e) {
    open_done(input.files)
  }, false)
};




    
//reader.readAsText(input.files[0]);
