import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
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
            <div className="col-2">
              <button className="current-button">
                <i class="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>Hello</h1>
          <ul>
            <li>Last updated:</li>
            <li>Description</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature">
              <span className="temperature">{temperature}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:%</li>
              <li>Wind:km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
    let city = "Stockholm";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading weather for your city...";
  }
}
