import React, { FC } from "react";
import { Link } from "react-router-dom";
import { BtnDel } from "../../shared/components/buttons/BtnDel";
import { Row } from "../../shared/components/table/row";
import { ReactComponent as IconRefresh } from "../../assets/icons/iconRefresh.svg";
import "./style.css";

interface IProps {
  id: number;
  name: string;
  temperature: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
  delCard: (id: number) => void;
  refresh: () => void;
}
export const Card: FC<IProps> = ({
  id,
  name,
  weather,
  wind,
  temperature,
  delCard,
  refresh,
}) => {
  return (
    <div key={id} className="card">
      <div className="header-card">
        <h2 className="cardTitle">{name}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconRefresh height={18} style={{ opacity: 0.4 }} onClick={refresh} />
          <BtnDel onClick={() => delCard(id)} />
        </div>
      </div>
      <Link to={"detailed"} style={{ textDecoration: "none" }}>
        <table>
          <Row
            title="Tamperature:"
            value={`${temperature.toFixed()} ℃`}
            icon={
              <img
                src={require("../../assets/icons/iconThermometer.svg").default}
                height={25}
              />
            }
          />
          <Row
            title={weather.main}
            value={weather.description}
            icon={
              <img
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                height={30}
              />
            }
          />
          <Row
            title="Wind:"
            value={`speed: ${wind.speed}`}
            icon={
              <img
                src={require("../../assets/icons/iconWind.svg").default}
                height={25}
              />
            }
          />
        </table>
      </Link>
    </div>
  );
};
