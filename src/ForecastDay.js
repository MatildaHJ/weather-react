import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        className="forecast-icon"
        src={props.data.condition.icon_url}
        alt="Weather Icon"
        width={85}
      />

      <div className="forecast-temps">
        <span className="temp-min">{maxTemperature()}</span> /{" "}
        <span className="temp-max">{minTemperature()}</span>
      </div>
    </div>
  );
}
