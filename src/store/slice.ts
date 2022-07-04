import { ICity } from "./../shared/interfaces/cityInterface";
import { createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";

interface ICitiesState {
  weatherCity: ICity;
  loading: boolean;
}

const initialState = {
  weatherCity: {},
  loading: true,
} as ICitiesState;
export const citiesySlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(thunks.loadWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(thunks.loadWeather.fulfilled, (state, action) => {
        state.weatherCity = action.payload;
        state.loading = false;
      });
  },
});
