alert("Hello World!")

let colores = ["blue","white","gray","red","purple","yellow","black","orange","green"]

function CambiarFondo(){
    let indice = parseInt(Math.random() * 10) - 1;
    let color = colores[indice];
    document.querySelector("body").style.background = color;
    let mensaje = document.querySelector("#txtMensaje").value;
    document.querySelector("#miDivision").innerHTML = mensaje;
}

/*
setTimeout(() => {
    CambiarFondo()
}, 4000);
*/

setInterval(() => {
    CambiarFondo()
}, 1000);