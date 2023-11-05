let name =  "Carlos Eduardo";
let lastName = "Cuamatzi Conde";
let age = "19"

console.log("Soy " + name +  ' mi apellido es ' + lastName);
console.log("I\'m " + name +  ' my last Name is ' + lastName);
console.log("I'm " + name +  ' my last Name is ' + lastName);


//Imprimir Soy Carlos Eduardo y tengo 19 años
//Strings Templates o Strings Literals
console.log(`Soy ${ name } ${lastName} y tengo ${ age } años`)

//metodos y atibutos para string 
const texto = "EstE eS UN tExTo" 
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.charAt(5))
console.log(texto.endsWith('s'))
console.log(texto.includes('es'))
console.log(texto.length);
