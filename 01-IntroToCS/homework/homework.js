'use strict';

function BinarioADecimal(num) {
   var exponente = num.length - 1;
   var acumulador = 0;
   var i;
   for (i = 0; i < num.length; i++) {
      acumulador = acumulador + (num[i] * Math.pow(2, exponente));
      exponente = exponente - 1;
   }
   return acumulador;
}
console.log(BinarioADecimal("1111"));


function DecimalABinario(num) { 
   var resultado= ""; 
   while(num>0){
     resultado=num%2 + resultado; 
     num=Math.floor(num/2); 
   }
   return resultado; 

  }
  console.log(DecimalABinario(2)); 


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
