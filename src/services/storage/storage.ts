import _, { keyBy } from "lodash";

const KEY = "weather";
const loadStorage = () => {
  const existWeather = localStorage.getItem(KEY);
  if (_.isNull(existWeather)) {
    localStorage.setItem(KEY, JSON.stringify([]));
  } else {
    const resp = JSON.parse(existWeather);
    return resp;
  }
};
const set = (arr: any) => {
  localStorage.setItem(KEY, JSON.stringify(arr));
};
const saveToStorage = (data: any) => {
  const existWeather = localStorage.getItem(KEY);
 
  let arr = existWeather && JSON.parse(existWeather);

  if (arr !== null && !_.isEmpty(data)) {
    arr.push(data);
  }
  localStorage.setItem(KEY, JSON.stringify(arr));
};
export const serviceLocal = {
  loadStorage,
  set,
  saveToStorage,
};
