import React from "react";

export default function WeatherForecastDay(props) {
  function dailytemperature() {
    let temperature = Math.round(props.data.temperature);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur"];
    return days[day];
  }

  return (
    <div>
      <span className="day-forecast">{day()}</span>
      <span className="img-forecast">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          width={40}
          alt="forecast-mon"
        />
      </span>
      <span className="temp-forecast">{dailytemperature()}°C</span>
    </div>
  );
}
