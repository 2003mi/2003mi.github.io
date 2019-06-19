function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}



function about(){
    removeElement("abouttxt");
    document.getElementById("about").innerHTML = '<iframe src="./sides/about.html" scrolling="no" frameborder="0" style="border:none; float: left; margin: none;"  height="90%" width="100%"></iframe>';
    var element = document.getElementById('about');
    element.style.opacity = "1";
    element.style.filter  = 'alpha(opacity=100)'; // IE fallback
}