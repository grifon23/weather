import React, { FC } from "react";
import { ICity } from "./../../shared/interfaces/cityInterface";
interface IProps {
  weather: ICity;
}
export const DeatailedWeather: FC<IProps> = ({ weather }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul style={{ marginTop: 20 }}>
        <li className="itemList">
          <p className="weatherContent">Temperature feels like:</p>
          <p className="valueWeather">
            {`${weather.temperature.feels_like.toFixed()} ℃`}
          </p>
        </li>
        <li className="itemList">
          <p className="weatherContent">Temperature now:</p>
          <p className="valueWeather">{`${weather.temperature.temp.toFixed()} ℃`}</p>
        </li>
        <li className="itemList">
          <p className="weatherContent">Temperature max:</p>
          <p className="valueWeather">
            {`${weather.temperature.temp_max.toFixed()} ℃`}
          </p>
        </li>
        <li className="itemList">
          <p className="weatherContent">Temperature min:</p>
          <p className="valueWeather">
            {`${weather.temperature.temp_min.toFixed()} ℃`}
          </p>
        </li>
        <li className="itemList">
          <p className="weatherContent">Humidity</p>
          <p className="valueWeather">
            {`${weather.temperature.humidity.toFixed()} %`}
          </p>
        </li>

        <li className="itemList">
          <p className="weatherContent">Pressure atmosfere</p>
          <p className="valueWeather">
            {`${weather.temperature.pressure.toFixed()} mm Hg Art`}
          </p>
        </li>
      </ul>
      <ul>
        <li className="itemList">
          <p className="weatherContent">{`${weather.weather.main}:`}</p>
          <p className="valueWeather">{weather.weather.description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather.icon}.png`}
            style={{ marginLeft: 20 }}
          />
        </li>
        <li className="itemList">
          <p className="weatherContent">Wind speed:</p>
          <p className="valueWeather">{`${weather.wind.speed} m/s`}</p>
        </li>
      </ul>
    </div>
  );
};
