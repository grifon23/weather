export interface ICity {
  id: number;
  name: string;
  temperature: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
export interface IListCities extends Array<ICity> {}
