import React, { useState } from "react";
import axios from "axios";

import "./Weatherapp.css";

export default function Weatherapp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="Weatherapp">
          <form className="mb-2">
            <div className="row">
              <div className="col-9 searchbar-input">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3 searchbar-btn">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-dark btn-block"
                />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6">
              <h3>{city}</h3>
              <ul>
                Humidity: 23% <br />
                Wind: 8 km/h
              </ul>
            </div>
            <div className="col-6 temperaturedisplay">
              <span className="currenttemp">12</span>
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
        <p className="opensource-ref">
          <a href="https://github.com/simoneraich/react-weather-app.git">
            Open-source code,
          </a>{" "}
          by Simone Raich
        </p>
      </div>
    );
  } else {
    const apiKey = "o0382t7818a50f033a66124d7a0cb101";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading Data..";
  }
}
