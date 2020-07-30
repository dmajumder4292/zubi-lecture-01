var myNodelist = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var list = document.querySelector("ul");
list.addEventListener('click', function(ev){
    console.log(ev);
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
})

function newElement() {
    alert("You still need to write the code for adding an element")
}