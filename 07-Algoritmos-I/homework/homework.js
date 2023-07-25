'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1];
  var i;
  for (i = 2; i <= num; i++) {
    if (num % i === 0) {
      array.push(i);

      //i++
      num = num / i; // 180 /2 
      i = i - 1;  //3-1=2 
    }
  }
  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var i;
  var j;
  var aux;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;

}
//console.log(bubbleSort([1,4,3,8,2])); 


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var i;
  var j;
  var aux;
  for (i = 1; i < array.length; i++) {
    aux = array[i];
    for (j = i - 1; j >= 0; j--) { // [10, 7, 9, 5]
      if (aux < array[j]) {
        aux = array[j + 1];
        array[j + 1] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let dato = array[i];
    let pos = i;
    for (let j = i + 1; j < array.length; j++) {//[7,4,5,3,1,2,10]
      if (dato > array[j]) {
        dato = array[j];
        pos = j;
      }
    }
    array[pos] = array[i];
    array[i] = dato;
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
