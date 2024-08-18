const API_KEY="d52fcebccd4f50420a2d86cfa098f865";

const getCurrentWeatherData= async()=>{
    const city="Delhi";
    const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.json();
}

const formatTemperature = (temp) => `${temp?.toFixed(1)}°`;

const loadCurrentForecast = ({name, main:{temp, temp_max, temp_min}, weather:[{description}]}) =>{
    const currentForecastElement = document.querySelector("#current-forecast");
    currentForecastElement.querySelector(".city").textContent= name;
    currentForecastElement.querySelector(".temp").textContent= formatTemperature(temp);
    currentForecastElement.querySelector(".description").textContent= description;
    currentForecastElement.querySelector(".min-max-temp").textContent= `H:${formatTemperature(temp_max)} L:${formatTemperature(temp_min)}`;

}
document.addEventListener("DOMContentLoaded",async()=>{
   const currentWeather= await getCurrentWeatherData();
   loadCurrentForecast(currentWeather)
})