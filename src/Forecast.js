import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <section className="grid grid-5-columns">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="forecast-days" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
      </div>
    );
  } else {
    let apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
