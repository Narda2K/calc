document.getElementById('button').addEventListener("click", create_para);

//für die ID der Elemente
var i = 0;

function create_para(event) {
    var element = document.createElement("input");
    element.type = "text";
    element.value = document.getElementById('eingabe').value;
    
    element.id = '' + i;
    i++;

    // 1. Create the button
    var button = document.createElement("button");
    button.innerHTML = "Entfernen";
    button.id = '' + i;
    button.className = 'button';
    i++;

    // 3. Add event handler
    button.addEventListener("click", removeHTML);

    //zu div hinzufügen
    var hh = document.querySelector(".paragraphs");
    hh.appendChild(element);
    var hh = document.querySelector(".buttons");
    hh.appendChild(button);
}
function removeHTML(){ 
    var clicked_id = this.id;
    var element = document.getElementById('' + (clicked_id-1));
    element.parentNode.removeChild(element);
    var element2 = document.getElementById('' + clicked_id);
    element2.parentNode.removeChild(element2);
}