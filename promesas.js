const datos = [1,2,3,4,5,6]

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            reject('No jaló');
        }, 3000);
    }
)

console.log(myPromise);

console.log('Inicia Promesa')

myPromise.then((data) => {
    console.log(data);
    console.log('Finaliza la promesa');
}).catch(error => console.log(error))

console.log ('El codigo continúa')