import React from "react";

export default function WeatherForecastDay(props) {
  function dailytemperature() {
    let temperature = Math.round(props.data.temperature);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <span className="day-forecast">{day()}</span>
      <span>
        <img
          className="img-forecast"
          src={props.data.condition.icon_url}
          alt={props.data.icon}
        />
      </span>
      <span className="temp-forecast">{dailytemperature()}°C</span>
    </div>
  );
}
