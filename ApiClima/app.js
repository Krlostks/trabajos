const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKei = "0ff6ca295f725ae915a25faea9b63a47";
const inputCity= document.querySelector("#city");
const btnBuscar = document.querySelector("#btnBuscar");

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat , lon){
    const url= `${ UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKei}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('h2').innerHTML = clima.name;
    document.querySelector('h3').innerHTML = clima.main.temp -273.1 + "°C";
    const pagina = document.querySelector(".container")
    if (clima.main.temp < 283 ) {
    pagina.style.background = "#3a52d8";
    }else if(clima.main.temp > 298 ){
    pagina.style.background = "#e00e0e";
    } else{
    pagina.style.background = "#fffb00";
    
    }
}

async function getClimaBYCity(city){
    const url = `${UrlBase}q=${city}&appid=${ApiKei}`;
    const clima  =await fetchApi(url);
    console.log(clima);

    const climaC = document.querySelector(".container .left #cambiante");
    climaC.textContent = `${city}`
    const climaCam = document.querySelector(".container .left #climacambiante");
    climaCam.textContent = `${clima.main.temp -273.1 +"°c"}`
    const pagina = document.querySelector(".container")
    if (clima.main.temp < 283 ) {
    pagina.style.background = "#3a52d8";
    }else if(clima.main.temp > 298 ){
    pagina.style.background = "#e00e0e";
    } else{
    pagina.style.background = "#fffb00";
    
    }
}

navigator.geolocation.getCurrentPosition(
    position =>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
    )

btnBuscar.addEventListener('click', () =>{
    const city = inputCity.value;
    if (city) {
        getClimaBYCity(city)
}
});
