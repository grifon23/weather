import { loadData } from "./../api/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceLocal } from "../services/storage/storage";

const loadWeather = createAsyncThunk(
  "weather/loadCityWeather",
  async function (params: { cityName: string; switchSave: boolean }) {
    const data = await loadData(params.cityName);
     const weatherCard = {
    name: data.name,
    id: data.id,
    temperature: data.main,
    weather: data.weather[0],
    wind: data.wind,
  };
    params.switchSave && serviceLocal.saveToStorage(weatherCard);
    return weatherCard;
  }
);
export const thunks = {
  loadWeather,
};
