import _ from "lodash";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadData } from "../../api/requests";
import { FormCity } from "../../components";
import { HeaderForm, WeatherCards } from "../../containers";
import { ICity, IListCities } from "../../shared/interfaces/cityInterface";
import { thunks, useAppDispatch, useAppSelector } from "../../store";
import "./style.css";

export const Home: FC = () => {
  const [cityName, setCityName] = useState("");
  const [listCities, setListCities] = useState<IListCities>([]);
  const { weatherCity, loading } = useAppSelector((state) => state.cityWeather);
  useEffect(() => {
    const existWeather = localStorage.getItem("weather");
    existWeather === null
      ? localStorage.setItem("weather", JSON.stringify([]))
      : setListCities(JSON.parse(existWeather));
  }, [loading]);
  const dispatch = useAppDispatch();
  const onChange = (e: any) => {
    setCityName(e.target.value.trim());
  };

  const reduxCard = (e: any) => {
    e.preventDefault();
    try {
      _.isEmpty(listCities) && dispatch(thunks.loadWeather(cityName));

      dispatch(thunks.loadWeather(cityName));
    } catch (error) {}
    setCityName("");
  };

  const delCard = (id: number) => {
    const temp = listCities.filter((el) => el.id !== id);
    setListCities(temp);
    localStorage.setItem("weather", JSON.stringify(temp));
  };

  const refreshWeather = async (card: any) => {
    //const resp = await loadData(card.name);
    //console.log("card", resp);
  };
  return (
    <div className="containerPage">
      <div className="center">
        <p className="titleHeader">Open Weather</p>
        <FormCity getCity={reduxCard} value={cityName} onChange={onChange} />
      </div>
      <WeatherCards
        listCities={listCities}
        delCard={delCard}
        refreshWeather={refreshWeather}
      />
    </div>
  );
};
