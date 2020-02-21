var input = document.getElementById('myTextInput');
var list = document.getElementById('history');
var input_li = document.getElementById('myTextInput-li');
var debug = 0;
var filetype = ""
input.focus();
input.select();

function m_over(){
    input.focus();
};

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}