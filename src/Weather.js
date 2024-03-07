import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: "wednesday 22.05",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="col-1">
              <button className="current-button">
                <i class="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated:
              <span className="text-capitalize"> {weatherData.date}</span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading weather...";
  }
}
