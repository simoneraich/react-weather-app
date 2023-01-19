import React from "react";

import FormattedDate from "./FormattedDate";
import Weatherapp from "./Weatherapp";
import WeatherIcon from "./WeatherIcon";

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
          <span className="currenttemp">{props.data.temperature}</span>
          <span className="units"> °C I °F</span>
          <WeatherIcon icon_url={props.data.icon_url} />
        </div>
      </div>
    </div>
  );
}
