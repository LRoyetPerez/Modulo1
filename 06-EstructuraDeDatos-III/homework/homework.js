'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de
   sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order").
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png
   dentro del directorio homework.
*/
function BinarySearchTree() {
   this.root = value;
   this.left = null;
   this.rigth = null;
}
BinarySearchTree.prototype.insert = function (value) {
   var nodo = new BinarySearchTree(value);

   if (value < this.root) {
      if (this.left === null) {
         this.left = nodo;
         return value;
      }
      else {
         return this.left.insert(value);
      }
   }

   else {
      if (this.rigth === null) {
         this.rigth = nodo;
         return value;
      }
      else {
         return this.rigth.insert(value);
      }
   }
}


//size: retorna la cantidad total de nodos del árbol

BinarySearchTree.prototype.size = function () {
   var contador = 1; 
   if(this.left!== null){
      contador=contador + this.left.size(); 
   }
   if(this.rigth!==null){
      contador = contador + this.rigth.size(); 
   }
   return contador; 
}


BinarySearchTree.prototype.contains = function (value) {
   if (this.root === value) return true;
   if (this.left && this.left.contains(value)) return true; // si tengo this.left preguntale que si tiene eso y retorne true;  se cumple la primera y se guarda la segunda 
   if (this.right && this.right.contains(value)) return true;
   return false;

}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   switch (order) {
      // Post-order Iz- Der- Nd
      case "post-order":
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
         cb(this.root);
         break;

      // Pre-order Nd- Iz- Der
      case "pre-order":
         cb(this.root);
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);

         break;


      //In Order Iz- Nd- Der
      default:
         this.left && this.left.depthFirstForEach(cb, order);
         cb(this.root);
         this.right && this.right.depthFirstForEach(cb, order);
         break;
   }

}
BinarySearchTree.prototype.breadthFirstForEach = function (cb , pendiente) {
   if (!pendiente) {
      var pendiente = [];
   }
   cb(this.value);
   this.left && pendiente.push(this.left);
   this.right && pendiente.push(this.right);

   if (pendiente.length) {
      pendiente.push().breadthFirstForEach(cb, pendiente);
   }

}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
