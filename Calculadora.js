'use strict'

alert("Bienvenido a la calcula con ventana emergente")

let numero1 = Number(parseInt(prompt('Coloca el primero numero')));

let numero2 = Number(parseInt(prompt('Coloca el segundo numero')));

let operacion = prompt("S para suma | R para restar | M para multiplicar | D para dividir");

let resultado;

switch (operacion){
 case "s" || "S":
  resultado = numero1 + numero2;
  console.log(resultado);
  break;

 case "r" || "R":
  resultado = numero1 - numero2;
  console.log(resultado);
  break;

 case "m" || "M":
  resultado = numero1 * numero2;
  console.log(resultado);
  break;

 case "d" || "D":
  if(numero2 == 0){
   console.log("No puede divir entre 0");
  }else{
  resultado = numero1 / numero2;
  console.log(resultado);
  }
  break;

  default:
  console.log('Hazlo bien, no pusiste bien los numeros')
 
};
