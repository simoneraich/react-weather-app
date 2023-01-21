import React from "react";

import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  return (
    <div>
      <span className="currenttemp">{props.celcius}</span>
      <span className="units"> °C I °F</span>
    </div>
  );
}
