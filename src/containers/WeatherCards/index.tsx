import { FC, useEffect, useState } from "react";
import { ListCards, EmptyMessage } from "../../components";
import { ICity, IListCities } from "../../shared/interfaces/cityInterface";
import _ from "lodash";
import "./style.css";
import { serviceLocal } from "../../services/storage/storage";
import { useAppSelector } from "../../store";
import { loadData } from "../../api/requests";
interface IProps {}
export const WeatherCards: FC<IProps> = () => {
  const [listCities, setListCities] = useState<IListCities>([]);
  const { loading } = useAppSelector((state) => state.cityWeather);
  useEffect(() => {
    const data: IListCities = serviceLocal.loadStorage();
    const sortArr = data.sort((a: ICity, b: ICity) =>
      a.name.localeCompare(b.name)
    );
    setListCities(sortArr);
  }, [loading]);
  const delCard = (id: number) => {
    const temp = listCities.filter((el) => el.id !== id);
    setListCities(temp);
    serviceLocal.set(temp);
  };
  const refreshWeather = async (name: string, i: number) => {
    const resp = await loadData(name);
    let weatherCard = {
      name: resp.name,
      id: resp.id,
      temperature: resp.main,
      weather: resp.weather[0],
      wind: resp.wind,
    };
    let tempArr = [
      ...listCities.map((el, index) => {
        if (i === index) {
          el = weatherCard;
        }
        return el;
      }),
    ];
    setListCities(tempArr);
    serviceLocal.set(tempArr);
    alert("refresh");
  };
  return (
    <div className="dashboard">
      {_.isEmpty(listCities) ? (
        <EmptyMessage />
      ) : (
        <ListCards
          listCities={listCities}
          delCard={delCard}
          refreshWeather={refreshWeather}
        />
      )}
    </div>
  );
};
