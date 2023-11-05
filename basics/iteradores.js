//Iteadores de arrays
const  fruits  = ['apple', 'melon', 'orange', 'cherry'];

//for each
//Itera Array
fruits.forEach(
    function (fruits) {
        console.log(`fruta ${ fruits}`);
    }
);

console.log('Arrow function')
fruits.forEach(
    (fruits) => {
        console.log(`fruta ${ fruits}`);
    }
    );

console.log('Arrow function Simplified')
fruits.forEach( fruits => console.log(`fruta ${ fruits}`));

//map ()
// regrsa un array nuevo a partir del original
const fruitsMayus = fruits.map(
    fruits=> {
        return fruits.toUpperCase();
    }
);
console.log('*'.repeat(20));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1,2,3,4,5]
const squares = numbers.map(num => num * num)
console.log(numbers);
console.log(squares);

//filter()
// crea un array nuevo a partir de una condicion 
console.log('*' .repeat(15) + 'filer');
const startswithA = fruits.filter(fruits => fruits.startsWith('a'));
console.log(fruits);
console.log(startswithA);

const pares = numbers.filter(num => num % 2 !== 0)
console.log(numbers);
console.log(pares);

//reduce
// retorna un unico valor a oartir del array original
const sumatoria = numbers.reduce((a,b) => a + b );
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a,b) => a * b );
console.log(numbers);
console.log(factorial);

//some ()
//evalua cada elmento retorna true si al menos
//uno cumple una condicion 

console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num > 6));

//every()
//regrsa true si todos cumplen

console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));