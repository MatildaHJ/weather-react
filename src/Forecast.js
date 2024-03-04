import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <section className="grid grid-5-columns">
      <div className="forecast-days">
        <div className="day">Mon</div>
        <i class="fa-solid fa-cloud-sun forcast-icon"></i>
        <div className="forecast-temp">20°C</div>
      </div>
      <div className="forecast-days">
        <div className="day">Tue</div>
        <i class="fa-solid fa-cloud-sun forcast-icon"></i>
        <div className="forecast-temp">20°C</div>
      </div>
      <div className="forecast-days">
        <div className="day">Wedn</div>
        <i class="fa-solid fa-cloud-sun forcast-icon"></i>
        <div className="forecast-temp">20°C</div>
      </div>
      <div className="forecast-days">
        <div className="day">Thurs</div>
        <i class="fa-solid fa-cloud-sun forcast-icon"></i>
        <div className="forecast-temp">20°C</div>
      </div>
      <div className="forecast-days">
        <div className="day">Fri</div>
        <i class="fa-solid fa-cloud-sun forcast-icon"></i>
        <div className="forecast-temp">20°C</div>
      </div>
    </section>
  );
}
