function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;

  getForecast(response.data.city);

}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "0232oa2bd084ect6f17c5fee93b97744";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
 let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; 
  
  let day = days[date.getDay()];
    let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;}

  if (hours < 10) {
    hours = `0${hours}`;}

  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
}

function getForecast(city) {
    let apiKey = "0232oa2bd084ect6f17c5fee93b97744";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
    let forecastElement = document.querySelector("#forecast");

    let forecastHtml = "";

    response.data.daily.forEach(function(day, index){
        if (index < 6) {
        forecastHtml =
          forecastHtml +
          `
        <div class="weather-forecast-day"> 
                        <div class="weather-forecast-date">${formatDay(day.time)}</div> 
                        <div> <img src="${day.condition.icon_url}" class="weather-forecast-icon"/> </div>
                        <div class="weather-forecast-temperatures"> 
                        <div class="weather-forecast-temperature">  <strong>${Math.round(day.temperature.maximum)}° </strong> </div> 
                        <div class="weather-forecast-temperature"> ${Math.round(day.temperature.minimum)}° </div>
                        </div>
                        </div>
`;
    }
    });

    forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchCity("New York");
displayForecast("New York");
