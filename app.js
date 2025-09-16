let amigos = [];
 let valor = document.getElementById("amigo");




function agregaAmigos() {
   
    if (valor.value.trim() === "") {
        alert("Escribir un valor correcto");
    }
    else
    amigos.push(valor.value);
   console.log(valor.value)
   let li = document.createElement("li");
        li.textContent = valor.value;
        document.getElementById("listaAmigos").appendChild(li);
    valor.value = "";
    valor.focus();

}
function verAmigos(){
   
    
    
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