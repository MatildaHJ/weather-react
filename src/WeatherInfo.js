import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div classname="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated:
            <span className="text-capitalize">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
