import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h1>{props.data.city}</h1>

      <div className="row mt-3">
        <div className="row">
          <div className="col">
            <WeatherIcon code={props.data.icon} size={70} />{" "}
          </div>
          <div className="col-1">
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>

        <div className="row mt-1">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <strong>Humidity:</strong> {props.data.humidity} %
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
