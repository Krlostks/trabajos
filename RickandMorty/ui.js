export function createPag(){
    let buttons = ``;
    for(let i = 1; i <= 42; i++){
        buttons += `
        <li class="page-item">
        <a class="page-link" href="#" data-id="${ i }">${ i }</a>
        </li>
        `
    }
    return buttons;
}

export function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-success-subtle');
    card.style.width='18rem';
    const htmlCard= `
    <img src="${ character.image }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ character.name }</h5>
    <p class="card-text">${ character.status }</p>
    <p class="card-text">${ character.origin.name }</p>
    <a href="#"
        class="btn btn-success"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        data-id = "${ character.id }">Ver más</a>
  </div>`
  card.innerHTML = htmlCard;
  return card;
}

export function createCardModal(character){
    const card = document.createElement('div');
    card.classList.add('card', 'bg-success-subtle');
    card.style.width='80%';
    card.style.margin='0 auto';
    let statuColor = '';
    if (character.status === 'Alive') {
        statuColor = 'bg-success';
    }
    else if (character.status === 'Dead') {
        statuColor = 'bg-danger';
    }
    else {
        statuColor = 'bg-warning';
    }
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text badge ${statuColor}">${ character.status }</p>
        <p class="card-text">${ character.origin.name }</p>
        <p class="card-title">${ character.location.name }</p>
  </div>`
  card.innerHTML = htmlCard;
  return card;
}