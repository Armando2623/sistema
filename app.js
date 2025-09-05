let amigos = [];




function agregaAmigos() {
    let valor = document.getElementById("amigo");

    if (valor.value.trim() === "") {
        alert("Escribir un valor correcto");
    }
    else
    amigos.push(valor);
    console.log(amigos.value)
    valor.value = "";
    valor.focus();

}
function verAmigos(){
    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    let valor = document.getElementById("amigo");
}