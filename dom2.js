function sumar(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;
const num2=parseFloat(document.getElementById('numero2').value)  || 0;

const suma=num1+num2;

document.getElementById('Resultado').value=suma;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function resta(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;
const num2=parseFloat(document.getElementById('numero2').value)  || 0;

const resta=num1-num2;

document.getElementById('Resultado').value=resta;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function multiplicar(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;
const num2=parseFloat(document.getElementById('numero2').value)  || 0;

const multiplicar=num1*num2;

document.getElementById('Resultado').value=multiplicar;

let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function division(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;
const num2=parseFloat(document.getElementById('numero2').value)  || 0;

const division=num1/num2;

document.getElementById('Resultado').value=division;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function raiz(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;


const raiz=Math.sqrt(num1);

document.getElementById('Resultado').value=raiz;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}


function seno(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;


const seno=Math.sin(num1);

document.getElementById('Resultado').value=seno;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function coseno(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;


const coseno=Math.cos(num1);

document.getElementById('Resultado').value=coseno;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function tangente(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;


const tangente=Math.tan(num1);

document.getElementById('Resultado').value=tangente;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}
function log10(){

const num1=parseFloat(document.getElementById('numero1').value)  || 0;


const log10=Math.log10(num1);

document.getElementById('Resultado').value=log10;


let titulo=document.querySelector('h1');
titulo.innerHTML='Calculadora JavaScript';
}

function borrar(){
document.getElementById('numero1').value ='';
document.getElementById('numero2').value ='';
document.getElementById('Resultado').value ='';

}

   







