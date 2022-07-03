import React, { FC } from "react";
import { Card } from "../../components";
import { ICity, IListCities } from "../../shared/interfaces/cityInterface";
import _ from "lodash";
import "./style.css";
interface IProps {
  listCities: IListCities;
  delCard: (id: number) => void;
  refreshWeather: (card: any) => void;
}
export const WeatherCards: FC<IProps> = ({
  listCities,
  delCard,
  refreshWeather,
}) => {
  return (
    <div className="dashboard">
      {_.isEmpty(listCities) ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "#FFFF" }}>...your weather</h3>
        </div>
      ) : (
        listCities.map((el) => (
          <Card
            delCard={delCard}
            name={el.name}
            wind={el.wind}
            temperature={el.temperature.temp}
            id={el.id}
            weather={el.weather}
            refresh={() => refreshWeather(el)}
          />
        ))
      )}
    </div>
  );
};
