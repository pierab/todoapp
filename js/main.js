function getInputValue() {
    var inputBox = document.getElementById("inputBox");
    return inputBox.value;
}
function task() {
    var inputBoxValue = getInputValue();
    if (inputBoxValue !== "") {
        doTask(inputBoxValue);
        clean();
    }
}
function doTask(taskText) {
    var tasks = document.getElementById("tasks");
    //Crear el elemento padre y sus hijos
    var elemento = document.createElement("div");
    elemento.className = "task col-md-12 col-xs-12";
    elemento.id = "task";
    elemento.innerHTML = '<input id="tachado" class="checked" type="checkbox" value="checkbox"  onclick="tachar(this)" dblclick="destachar(this)"><span>'+taskText+'</span>';
    // importante para eliminar  
    var tacho = document.createElement("span");
    tacho.className="glyphicon glyphicon-trash pull-right";
    tacho.onclick=function () {
        tasks.removeChild(elemento);
    }
    //Agregar elementos a tasks
    tasks.appendChild(elemento);
    elemento.appendChild(tacho);
}
function clean() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";
    inputBox.focus();
}
function tachar(dato) {
    dato.nextSibling.className = "tachao";
}
function destachar(date) {
    dato.nextSibling.className = "destachao";
}