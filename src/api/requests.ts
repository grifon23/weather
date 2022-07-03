import { get } from "./../services/domain/axiosServices";
export const loadData = async (city: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a553c43950e78a4c0e8967f69ff1499&units=metric`;

  try {
    const resp = await get(url);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (e) {
    console.log("error", e);
  }
};
