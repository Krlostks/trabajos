//funciones de orden superior 
//High order functions 
//Fucniones que reciben como parametros 
//mas funciones
const myFunctionWithABigName = () => {
    console.log('funcion inicial');
} 

console.log(myFunctionWithABigName);
myFunctionWithABigName();

const myFun = myFunctionWithABigName;
myFun();

const funOne = () => {
    console.log('Ejecuta funcion Uno');
}

const funTwo = (nombre) =>{
    console.log('Hi!' +  nombre);
    console.log('Ejecuta funcion dos');
}

funOne();
funTwo('Papu');

const funThree = (otherFunction) => {
    console.log ('inicia funcion tres');
    otherFunction();
    console.log ('termina funcion tres');
}
funThree(funOne);
funThree(() => console.log('funcion de flecha'));