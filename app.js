let amigos = [];
let valor = document.getElementById("amigo");




function agregaAmigos() {

    if (valor.value.trim() === "") {
        alert("Escribir un valor correcto");
    }
    else
     amigos.push(valor.value);
    mostrarEnPantalla();
    valor.value = "";
    valor.focus();

}

function sortearAmigo() {
    if (amigos.length === 0) {
        console.log("Agrega nombres de amigos")
    }
    let indice = Math.floor(Math.random() * amigos.length);

document.getElementById("listaAmigos").innerHTML="";

let li = document.createElement("li");
li.textContent = `El amigo secreto elegido es: ${amigos[indice]}`;
document.getElementById("listaAmigos").appendChild(li);   
}

function mostrarEnPantalla(){
    let li = document.createElement("li");
    li.textContent = valor.value;
    document.getElementById("listaAmigos").appendChild(li);
}