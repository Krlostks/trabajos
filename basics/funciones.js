// funciones en js
/*
function nombre (Params){
    body function
}
const nombre = function (params){
    body function
}
*/
//funciones con prametros y sin retorno
function saludo(){
    console.log('Holaaaaa');
}
saludo();

//funciones con parametros sin retorno
const Saluda= function(name){
    console.log('Hola '+ name);
}
Saluda('Pues yo');

// Funciones con parametros y con retorno
const fact = function(num){
    if (num === 0) return 1;
    return fact(num -1) * num
}
const result = fact(5);
console.log(result);

const saludaEnChino= () => {
    console.log('soy homelo chino, soy como homelo pelo, homelo chino');
}
saludaEnChino();

//con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('Hola');

const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula('HELOOOO');

//Dos o mas parametros y con retorno
const fullName = (firstname, lastname)=>{
return firstname + ' ' + lastname;
}
const nombreCompleto = fullName ('Carlos ' + 'Conde');
console.log(nombreCompleto);

// si el return es la unica linea se pede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);
/*
function duplica (num){
    return num * 2;
}*/

// funciones con parametros opcionales
const WelcomeToMexico = (user = 'Invitada') => {
    console.log(`Bienvenido a México ${ user } `);
}
 WelcomeToMexico();
 WelcomeToMexico('Batman')

 //Parametros con nombre
  const WelcomeToUtt = (user = 'Invitado', 
                        city = 'Mexico') => {
    console.log(`Bienvenido ${user}  de  ${city}`)
                        }
WelcomeToUtt();
WelcomeToUtt('Carlitos', 'Contla');
WelcomeToUtt(city = 'Contla', user='Krlitos');
                        