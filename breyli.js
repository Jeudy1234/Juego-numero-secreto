let numeroSecreto = 0;
let intentos= 0;
let Listanumerosorteados = [];
let numeroMaximo = 10;


function asignarTextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    // el usuario no aserto
    if (numeroDeusuario === numeroSecreto) {
        asignarTextoelemento('p',`Asertaste el numero en ${intentos} ${(intentos === 1) ? 'ves' : 'veses'}`);
        document.getElementById('Reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeusuario > numeroSecreto) {
        asignarTextoelemento('p','El numero es menor');
        }else {
            asignarTextoelemento('p','El numero es mayor');
        }
       intentos++;
       limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    
}
function condicionesIniciales() {
    asignarTextoelemento('h1', 'Juego del numero secreto');
    asignarTextoelemento('p', `Escoge un numero del 1 hasta el ${numeroMaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos =1;
}
function generarNumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(Listanumerosorteados);
    if (Listanumerosorteados.length == numeroMaximo) {
        asignarTextoelemento('p','Ya se soltearon todos los numeros posibles');
        
    } else {
    if (Listanumerosorteados.includes(numeroGenerado)) {
        return generarNumerosecreto();
       
    }else {
        Listanumerosorteados.push(numeroGenerado);
        return numeroGenerado;
    }

  }

}

function Reiniciarjuego() {
    //limpiar la caja
    limpiarCaja();
    //generar el numero aleatorio
    //indicar el mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitar el boton de juego
    document.querySelector('#Reiniciar').setAttribute('disabled','true');
    //iniciar el numero de intentos 

}
condicionesIniciales();