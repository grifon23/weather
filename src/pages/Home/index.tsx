import { FC } from "react";
import { HeaderForm, WeatherCards } from "../../containers";
import { thunks, useAppDispatch } from "../../store";
import "./style.css";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const createCardWeather = (cityName: string) => {
    try {
      dispatch(thunks.loadWeather({ cityName, switchSave: true }));
    } catch (error) {}
  };
  return (
    <div className="containerPage">
      <HeaderForm createCardWeather={createCardWeather} />
      <WeatherCards />
    </div>
  );
};
