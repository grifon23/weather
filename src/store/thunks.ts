import { loadData } from "./../api/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import { ICity } from "../shared/interfaces/cityInterface";
export const makeUniqArr = (arr: any) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const index: number = newArr.findIndex((item) =>
      _.isEqual(item.herb.name, arr[i].herb.name)
    );

    if (index !== -1) {
      newArr[index] = arr[i];
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const loadWeather = createAsyncThunk(
  "weather/loadCityWeather",
  async function (cityName: string) {
    const data = await loadData(cityName);

    const weatherCard = {
      name: data.name,
      id: data.id,
      temperature: data.main,
      weather: data.weather[0],
      wind: data.wind,
    };
    console.log("storeData", weatherCard);
    const existWeather = localStorage.getItem("weather");
    let arr = existWeather && JSON.parse(existWeather);

    if (arr !== null && !_.isEmpty(weatherCard)) {
      arr.push(weatherCard);
    }

    localStorage.setItem("weather", JSON.stringify(arr));
    return weatherCard;
  }
);
export const thunks = {
  loadWeather,
};
