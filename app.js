let amigos = [];




function agregaAmigos() {
    let valor = document.getElementById("amigo");

    if (valor.value.trim() === "") {
        alert("Escribir un valor correcto");
    }
    else
    amigos.push(valor.value);
   console.log(valor.value)
    valor.value = "";
    valor.focus();

}
function verAmigos(){
    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    let valor = document.getElementById("amigo");
}
function sortearAmigo(){
    if (amigos.length === 0){
        console.log("Agrega nombres de amigos")
    }
    let indice = Math.floor(Math.random() * amigos.length);
   
  console.log(amigos[indice]);

}

function asignarTextoElemento(){

}