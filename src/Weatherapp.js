import React, { useState } from "react";
import axios from "axios";

import Weatherinfo from "./Weatherinfo";
import Weatherforecast from "./Weatherforecast";

import "./Weatherapp.css";

export default function Weatherapp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon_url: response.data.condition.icon_url,
      coordinates: response.data.coordinates,
    });
  }
  function search() {
    const apiKey = "o0382t7818a50f033a66124d7a0cb101";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weatherapp">
          <form className="mb-2" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 searchbar-input">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
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
          <Weatherinfo data={weatherData} />
          <Weatherforecast coordinates={weatherData.coordinates} />
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
    search();
    return "Loading Data..";
  }
}
