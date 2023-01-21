import React from "react";

import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherIcon from "./WeatherIcon.js";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <div className="row">
        <div className="col-6">
          <h3>{props.data.city}</h3>
          <ul>
            <li className="formatted-date">
              <FormattedDate date={props.data.date} />
            </li>
            {props.data.description} <br />
            Humidity: {props.data.humidity} %<br />
            Wind: {props.data.wind} km/h
          </ul>
        </div>
        <div className="col-6 temperaturedisplay">
          <TemperatureConversion celcius={props.data.temperature} />
          <WeatherIcon icon_url={props.data.icon_url} />
        </div>
      </div>
    </div>
  );
}
