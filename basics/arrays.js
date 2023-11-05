// Arrays en Javascript
const myArray = [1 , 2 , 3, true, 'Hola amigos', 'L', 3.2, ['Hola soy otro array', 2, 3, false]]
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
 myArray[0] = "One"
 myArray[3] = false;
 console.log(myArray);

 //Pilas en js 
 //Last in first out 
 //Ingresar valores al final 
 //Extraer vlores al final
 //pop, shift, unshift, push
 const pila = [];
 //insertar valores
 pila.push(1);
 pila.push(2);
 pila.push(3);
 pila.push(4);
 console.log(pila);
 console.log(pila.pop());
 console.log(pila);
 console.log(pila.pop());
 console.log(pila);

 //colas en js
 //last in first out
 const cola = [];
 cola.unshift(1);
 cola.unshift(2);
 cola.unshift(3);
 console.log(cola);
 console.log(cola.shift());
 console.log(cola);
 console.log(cola.shift());
 console.log(cola);