import axios from "axios";

export const get = (url: string) => {
  const req = axios.get(url);
  return req;
};
