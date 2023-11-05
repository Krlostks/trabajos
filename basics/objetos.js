//Los objetos nospermiten almacenar datos
// a partir de una clave
/*
miObjeto = {clave: valor 'clave': valor}
miObjeto.clave
miObjetos['clave']
*/

const subject = {
    name: 'Programacion',
    totalHours: 90,
    weekHours: 7,
    calssroom: 'Lab Progra',
    teacher: 'Jose Manuel',
    'practice hours' : 60
}
console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.calssroom = 'Lab Programacion 1';
console.log(subject.calssroom);

console.log(subject);

subject['terical Hours'] = 30;
console.log(subject);

const group = {
    name:'4C',
    career: 'TIDSM',
    subject: [
        subject
    ],
    students: [
        {name: 'Krlos', lastname: 'TKS'},
        {name: 'Gadis', lastname: 'Ga1ker' },
        {name: 'Chema' , lastname: 'Chemita'}
    ] 
}
console.log(group);
console.log(group.students);