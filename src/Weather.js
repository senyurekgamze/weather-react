import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setWeatherData(null);
    setCity(event.target.elements.city.value);
  }

  function showWeatherData(response) {
    console.log(response.data);
    setWeatherData(response.data);
  }

  let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  if (city && !weatherData) {
    axios.get(apiUrl).then(showWeatherData);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input name="city" type="search" placeholder="Type a city" />
        <input type="submit" value="Search" />
      </form>

      {weatherData && (
        <ul>
          <li>Temperature: {Math.round(weatherData.main.temp)}°C</li>
          <li>Description: {weatherData.weather[0].description} </li>
          <li>Humidity: {weatherData.main.humidity}%</li>
          <li>Wind: {Math.round(weatherData.wind.speed)}km/h</li>
          <li>
            <img
              alt=""
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
