import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li className="d-flex justify-content-start">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h1 className="d-flex justify-content-center">{props.data.city}</h1>
      <ul>
        <li className="text-capitalize d-flex justify-content-center">
          {props.data.description}
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col">
          <div className="d-flex justify-content-center">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />{" "}
            </div>
            <div>
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <ul>
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
