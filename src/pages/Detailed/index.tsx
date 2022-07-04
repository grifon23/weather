import { useLocation } from "react-router-dom";
import { DeatailedWeather } from "../../containers/DetailedWeather";
import { ICity } from "../../shared/interfaces/cityInterface";
import "./style.css";

export const Detailed = () => {
  const location = useLocation();
  const weather = location.state as ICity;
  return (
    <div className="detailPage">
      <div className="headerContainer">
        <p className="titleHeader">{`Weather ${weather.name}`}</p>
      </div>
      <DeatailedWeather weather={weather} />
    </div>
  );
};
