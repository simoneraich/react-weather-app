import React, { useState } from "react";

import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celcius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div>
        <span className="currenttemp">{props.celcius}</span>
        <span className="units">
          {" "}
          °C I{" "}
          <a href="/" onClick={showF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="currenttemp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showC}>
            °C
          </a>{" "}
          I °F
        </span>
      </div>
    );
  }
}
