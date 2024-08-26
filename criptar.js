const textoTarea = document.querySelector(".texto__tarea");
const mensaje = document.querySelector(".mensaje");
var contenedor = document.querySelector(".contenedor__parrafos");
const originalBackgroundImage = 'url("/Simbolos/Muñeco.png")';

function btnEncriptar (){
    ocultarAdelante();
    const textoEncriptado = encriptar(textoTarea.value);
    mensaje.value = textoEncriptado;
    textoTarea.value = "";
    mensaje.style.backgroundImage = "none";
    contenedor.style.display = "none";
    document.getElementById('btncopiar').style.display = "block";
    document.getElementById('btnlimpiar').style.display = "block";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar (){
    const textoDesencriptado = desencriptar(textoTarea.value);
    mensaje.value = textoDesencriptado;
    textoTarea.value = "";
    mensaje.style.backgroundImage = "none";
    contenedor.style.display = "none";
    document.getElementById('btncopiar').style.display = "block";
    document.getElementById('btnlimpiar').style.display = "block";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

function copiarmensaje() {
    mensaje.select(); // Selecciona el texto dentro del textarea
    document.execCommand('copy');// Copia el texto al portapapeles
    alert("Texto copiado: " + mensaje.value);
}

function limpiarMensaje(){
    mensaje.style.backgroundImage = originalBackgroundImage;
    mensaje.value="";
    contenedor.style.display = "block";
    document.getElementById('btncopiar').style.display = "none";
    document.getElementById('btnlimpiar').style.display = "none";
}

function ocultarAdelante(){
    contenedor.classList.add("ocultar");
}