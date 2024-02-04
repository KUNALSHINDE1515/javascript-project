const apiKey = "8da72193090e1d474bad5125d09d6a8f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const seachBox = document.querySelector('.search input')
const seachBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)

document.querySelector(".city").innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';


if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./weather/clouds.png"
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "./weather/clear.png"
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./weather/rain.png"
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./weather/drizzle.png"
}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./weather/mist.png"
}

}



seachBtn.addEventListener("click", () => {
  checkWeather(seachBox.value)
})