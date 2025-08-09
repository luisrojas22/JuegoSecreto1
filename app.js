let numeroSecreto = 0
let intentos = 1
let numeromax = 10
let listaSorteada = []


function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento)
elementoHTML.innerHTML = texto

}

function verificarIntento(){
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
 
   console.log(numeroUsuario === numeroSecreto);
   if (numeroUsuario===numeroSecreto){
   asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces' }`);
   document.getElementById('reiniciar').removeAttribute('disabled')

   } else{
  if (numeroUsuario>numeroSecreto){
    asignarTextoElemento("p","El numero es menor");
  } else{
    asignarTextoElemento("p","El numero es mayor");
  }
  intentos++;
  limpiarcaja();
   }
   return;
}  




  function limpiarcaja(){

 document.querySelector('#valorUsuario').value = '';
   
}

function Crearnumero() { 
let numeroGenerado = Math.floor(Math.random() * numeromax+1);
console.log(numeroGenerado);
console.log(listaSorteada)
if (listaSorteada.length==numeromax){
asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
 } else
  if(listaSorteada.includes(numeroGenerado)){
  return Crearnumero();
  } else {
  listaSorteada.push(numeroGenerado);
  return numeroGenerado
}

}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del numero secreto')
asignarTextoElemento('p',`Elije un numero del 1 al ${numeromax}`)
numeroSecreto = Crearnumero();
intentos = 1
}
function reiniciarJuego(){

limpiarcaja();

condicionesIniciales(); 
document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();


