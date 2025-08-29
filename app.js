let amigos = [];




function agregaAmigos(){
    let valor = document.getElementById("amigo")

    if(valor.value.trim() === ""){
        alert("Escribir un valor correcto")
    }
        else
            amigos.push(valor);

amigos.forEach((nombre, i) => {
    console.log("Posición " + i + ": " + nombre);
})
        console.log(amigos)
     valor.value = "";
        valor.focus();
}