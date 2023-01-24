import React, { useEffect, useState } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay.js";

export default function Weatherforecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function searchForecast() {
    let apiKey = "o0382t7818a50f033a66124d7a0cb101";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
  }

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col-2 forecast">
            <WeatherForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return "Loading...";
  }
}
