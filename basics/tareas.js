const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');




const lista = [];

const addTarea= () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value='';
    showLista();
}

const showLista = () => {
    let listaHtml = '';
    lista.forEach(listaItem => {
        listaHtml+=`<li> ${ listaItem }</li>`;
    })
    listaTareas.innerHTML = listaHtml;
}