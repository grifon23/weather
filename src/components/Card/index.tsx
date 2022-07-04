import React, { FC } from "react";
import { Link } from "react-router-dom";
import { BtnDel } from "../../shared/components/buttons/BtnDel";
import { Row } from "../../shared/components/table/row";
import { ReactComponent as IconRefresh } from "../../assets/icons/iconRefresh.svg";
import "./style.css";
import { ICity } from "./../../shared/interfaces/cityInterface";

interface IProps {
  card: ICity;
  delCard: (id: number) => void;
  refresh: () => void;
}
export const Card: FC<IProps> = ({ card, delCard, refresh }) => {
  return (
    <div key={card.id} className="card">
      <div className="header-card">
        <h2 className="cardTitle">{card.name}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconRefresh height={18} style={{ opacity: 0.4 }} onClick={refresh} />
          <BtnDel onClick={() => delCard(card.id)} />
        </div>
      </div>
      <Link
        state={card}
        to={{ pathname: "weather/detailed" }}
        style={{ textDecoration: "none" }}
      >
        <table>
          <Row
            title="Tamperature:"
            value={`${card.temperature.temp.toFixed()} ℃`}
            icon={
              <img
                src={require("../../assets/icons/iconThermometer.svg").default}
                height={25}
              />
            }
          />
          <Row
            title={card.weather.main}
            value={card.weather.description}
            icon={
              <img
                src={`http://openweathermap.org/img/w/${card.weather.icon}.png`}
                height={30}
              />
            }
          />
          <Row
            title="Wind:"
            value={`speed: ${card.wind.speed}`}
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
