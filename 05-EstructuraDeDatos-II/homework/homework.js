'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value){//5, 7, 2
  let node = new Node(value);
  let current = this.head;
  
  if(!this.head){ 
    this.head = node;
    return this.head;
  }
  
  while(current.next){//Si next no es null
    current = current.next;
  }
  
  current.next = node;
  }
  

  
  LinkedList.prototype.remove = function(){
  //lista vacia
  if(!this.head){
    return null;
  }
  
  let current = this.head;
  
 
  if(!current.next){//!current.next
  let datoNodo = current.value;
  this.head = null;
  return datoNodo;
  }
  
  //la lista tiene mas de un nodo, varios nodo
  while(current.next.next){
   current = current.next;
  }
  let datoNodo = current.next.value;
  current.next = null;
  return datoNodo;
  }
  
  LinkedList.prototype.search = function(parámetro){
    let current = this.head;
  
    while(current){
      if(typeof parámetro === 'function'){
        if(parámetro(current.value)){
          return current.value;
        }
      }else{
        if(parámetro===current.value){
          return parámetro;
        }
      }
      current = current.next;
    }
    return null;
  }


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(clave, valor) {
  this.array = [];
  this.numBuckets = 35;
  }
  //Metodo hash. cadena.charCodeAt(indice) = metodo que devuelve un número que indica el valor Unicode(unico) del carácter en el 
  //índice proporcionado.
  HashTable.prototype.hash = function(clave){//este metodo solo me dice en que posicion guarda la clave
    var acumulador = 0;
    for(var i=0; i<clave.length; i++){
      acumulador = acumulador + clave.charCodeAt(i);//me indica el valor en num de cada caracter.
    }
    return acumulador % this.numBuckets;//
  }
  
  HashTable.prototype.set = function(clave, valor){//se encarga de generar y guardar la clave:valor en la posicion que le corresponde.
  if(typeof clave !== 'string'){
    throw TypeError('keys must be strings')
  }
  
  var dato = this.hash(clave);
  if(!this.array[dato]){
    this.array[dato] = {};
  }
  this.array[dato][clave] = valor;
  }
  
  HashTable.prototype.get = function(clave){
  let dato = this.hash(clave);
  return this.array[dato][clave];
  }
  
  HashTable.prototype.hasKey = function(clave){
  var i = this.hash(clave);
  return this.array[i].hasOwnProperty(clave); 
  }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
