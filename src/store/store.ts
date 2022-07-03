import { configureStore } from "@reduxjs/toolkit";
import { citiesySlice } from "./slice";

const store = configureStore({
  reducer: {
    cityWeather: citiesySlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
