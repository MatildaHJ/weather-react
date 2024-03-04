import React, { useState } from "react";
import "./Search.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formattedCity =
      city.length > 1 ? city.charAt(0).toUpperCase() + city.slice(1) : "";
    if (formattedCity.length > 1) {
      setMessage(`It is 20°C in ${formattedCity}`);
    } else {
      alert("Enter a city");
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="mb-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              onChange={updateCity}
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Current"
              className="btn btn-success w-100"
            />
          </div>
        </div>
      </form>
      <br />
      <h2>{message}</h2>
      <br />
    </div>
  );
}
