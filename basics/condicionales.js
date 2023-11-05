//Condicional if 
// if (exp){}
let age = 18;
if (age >=18){
    console.log ('Es maor de edad');
}

//if(exp){} else {}
if (age >=18){
    console.log('Es mayor de edad');
}    else{
        console.log('Es menor de edad');
}

(age >= 18)? console.log('Es mayor'): console.log ('Es menor');


//if(exp) else if (exp) else {}
let ppt = Math.random();
if (ppt>0.33){
    console.log('cayó piedra');
} else if (ppt<0.66){
    console.log('Cayó papel');
}else {
    console.log('cayó tijeras');
}

// switch case
let day=Math.floor(Math.random()*7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Marte');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sabado');
}
//Truthy and Falsy
// '' == false
console.log ('' === false)
// 'a' == true
console.log ('a' === false)
// '0' == false
console.log (0 === true)
// '1' == true
console.log (1 === false)
let dato = '';
if (dato === ''){
    console.log('No hay nada papu');
}
if (dato){
    console.log('No hay nada bro');
}

let username = '';
let defaultName;

if (username){
    defaultName = username
}else{
    defaultName = 'Extraño';
}
console.log(defaultName);
username='Peter';
defaultName =username || 'Extraño';
console.log(defaultName);
//if ternario (exp)? true: false;