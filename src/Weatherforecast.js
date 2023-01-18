import React from "react";

export default function Weatherforecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2 forecast">
          <span className="day-forecast">Mon</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-mon"
            />
          </span>
          <span className="temp-forecast">20°C</span>
        </div>
        <div className="col-2 forecast">
          <span className="day-forecast">Tue</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-tue"
            />
          </span>
          <span className="temp-forecast">12°C</span>
        </div>
        <div className="col-2 forecast">
          <span className="day-forecast">Wed</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-wed"
            />
          </span>
          <span className="temp-forecast">10°C</span>
        </div>
        <div className="col-2 forecast">
          <span className="day-forecast">Thu</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-thu"
            />
          </span>
          <span className="temp-forecast">71°C</span>
        </div>
        <div className="col-2 forecast">
          <span className="day-forecast">Fri</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-fri"
            />
          </span>
          <span className="temp-forecast">19°C</span>
        </div>
        <div className="col-2 forecast">
          <span className="day-forecast">Sat</span>
          <span className="img-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              width={40}
              alt="forecast-sat"
            />
          </span>
          <span className="temp-forecast">9°C</span>
        </div>
      </div>
    </div>
  );
}
