const container = document.querySelector('.container');
const image = docment.querySelector('#image')
function setImage(e){
    const imgeSrc = e.target.src; 
    image.src = imageSrc; 
}

container.addEventListener('click', setmage)