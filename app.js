let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
condicionesIniciales();


let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto de Ashlye Ortiz';

let parrafo =document.querySelector('p');
parrafo.innerHTML = 'Por favor Indica un número del 1 al 10';

function intentoDeUsuario(){
    let numerodeUsuario= parseInt(document.getElementById('valorusuario').value);

    if (numerodeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numerodeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        }
        return;
    }
function reiniciar(){
    //document.querySelector('#valorusuario').value='';
    limpiarCaja();
    condicionesIniciales();
}
function limpiarCaja(){
    document.getElementById('valorusuario').value='';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    return numeroGenerado;
}
