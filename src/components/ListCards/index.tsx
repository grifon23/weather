import React, { FC } from "react";
import { ICity, IListCities } from "../../shared/interfaces/cityInterface";
import { Card } from "../Card";
import "./style.css";
interface IProps {
  listCities: IListCities;
  delCard: (id: number) => void;
  refreshWeather: (name: string, index: number) => void;
}
export const ListCards: FC<IProps> = ({
  listCities,
  delCard,
  refreshWeather,
}) => {
  return (
    <>
      {listCities.map((el: ICity, i: number) => (
        <Card
          delCard={delCard}
          card={el}
          refresh={() => refreshWeather(el.name, i)}
        />
      ))}
    </>
  );
};
