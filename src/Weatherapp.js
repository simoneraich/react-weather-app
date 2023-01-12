import React from "react";

import "./Weatherapp.css";

export default function Weatherapp() {
  return (
    <div className="Weatherapp">
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
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6">
          <h3>New York</h3>
          <ul>
            Humidity: 15% <br />
            Wind: 8 km/h
          </ul>
        </div>
        <div className="col-6 temperaturedisplay">
          <span className="currenttemp">9</span>
          <span className="units"> °C I °F</span>
          <span className="current-weather-img">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Weather-img"
              width={85}
            />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
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
        <div className="col-2">
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
        <div className="col-2">
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
        <div className="col-2">
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
        <div className="col-2">
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
        <div className="col-2">
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
