'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n<0) return "No se admiten numeros negativos"

  if (n == 0 || n == 1) { // 
    return 1; // si la condicion anterior se cumple retornar un 1
  }
  else { // si la condicion anterior no se cumple retornar 
    return n * nFactorial(n - 1);  // 5 (5-1)  => 4
                                   // 4 (4-1)  => 3
                                   // 3 (3-1)  => 2
                                   // 2 (2-1)  => 1
                                   // 1 =>       1
  }
}
console.log(nFactorial(8)); 


function nFibonacci(n) {
  if (n === 0 || n===1) { // Si en caso de que el numero ingresado sea cero retorne 0
    return n; 
  }

     // if(n===0 || n===1) return n; 
  }
  if (n >= 2) { // Segun la ecuacion de fibonacci inicia en 2
    return nFibonacci(n - 2) + nFibonacci(n - 1) // ecuacion de fibocanni, donde se realioza dos operaciones. 
  }
// console.log(nFibonacci(5));


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = []; // se crea un array para guardar la información de los metodos 
}
Queue.prototype.enqueue = function (valor) { // se crea un metodo enqueue donde se hereda el arreglo que se encuentra en la funcion queue
  return this.array.push(valor); // retornamos el arreglo agregandole un valo al final del arreglo
}

Queue.prototype.dequeue = function () { // se crea un metodo llamado dequeue donde se hereda el arreglo que se encuentra en la funcion Queue
  if (this.array.length === 0) { // se crea un condicional donde si la lñongitud del arreglo es 0 retorne undefined
    return undefined;
  } else { // si la condiciop anterior no se cumple  retorne el arreglo sin el ultimo elemento 
    return this.array.shift();
  }

}

Queue.prototype.size = function () { // se crea un metodo llamado Syze donde se retorne la longitud del arreglo. 
  return this.array.length;
}



/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
