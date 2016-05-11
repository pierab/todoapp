function getInputValue() {
    var inputBox=document.getElementById("inputBox");
    return inputBox.value;
}
function tweet() {
    var inputBoxValue= getInputValue();
    if(inputBoxValue!==""){
        doTweet(inputBoxValue);
        clean();
    }
}
function doTweet(tasktext) {
    var tweets = document.getElementById("tweets");
    //Como crear un elemento nuevo
    var contenedor = document.createElement("div");
    contenedor.className="bigboss";
    
    var parrafo = document.createElement("span");
    parrafo.className="textointerno";
    parrafo.innerHTML=tweetText;
    var check = document.createElement("input");
    check.type="checkbox";
    check.onchange= function () {
        if(check.checked==true){
            parrafo.innerHTML=tweetText.strike();
        }else{
            parrafo.innerHTML=tweetText;
        }
    }
    var tacho = document.createElement("button");
    tacho.className="fa fa-trash-o";
    tacho.onclick=function () {
        tweets.removeChild(contenedor);
    }
    
    tweets.appendChild(contenedor);
    contenedor.appendChild(check);
    contenedor.appendChild(parrafo);
    contenedor.appendChild(tacho);
}
function clean() {
    var inputBox=document.getElementById("inputBox");
    inputBox.value="";
    inputBox.focus();
}