'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <=1 ) return array ; 
   
  let pivote= array[0]; 
  let derecha= []; 
  let izquierda=[]; 
  let i; 
  for(i=1; i<array.length; i++){
    if(array[i]< pivote){                // los valores menores hacia la izquierda 
       izquierda.push(array[i]); 
    }
    else 
    derecha.push(array[i]); 
  }
  
  return quickSort(izquierda).concat(pivote,quickSort(derecha)); 
}
console.log(quickSort([2,5,1,5,7,4,3])); 


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array // si en caso dado que arreglo tenga menos o 1 solo elemento retornamos el array 

  var mitad = Math.floor(array.length / 2) // dividimos el arreglo en 2 pero con mathfloor se aplica si en caso de que la cantidad de elemtnos sea impar 
  var left = array.slice(0, mitad) // se divide el arreglo a la mitad desde 0 a la mitad
  var right = array.slice(mitad)


  // ordernar recursivamente las sublistas
  left = mergeSort(left) // [7, 1]
  right = mergeSort(right) // [15, 8]

  // reasignando el array
  array = [] // vamos a pushear los elementos ordenados [5, 7]

  while (left.length && right.length) {
    // comparar
    if (left[0] < right[0]) {
      array.push(left.shift())
    }
    else { // 7 < 5
      array.push(right.shift())
    }
  }

  array = array.concat(left, right)
  return array // array ordenado

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
