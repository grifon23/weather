import React, { FC, useState } from "react";
import { FormCity } from "../../components/FormCity";
import "./style.css";
interface IProps {
  createCardWeather: (e: any) => void;
}
export const HeaderForm: FC<IProps> = ({ createCardWeather }) => {
  const [cityName, setCityName] = useState("");
  const onChange = (e: any) => {
    const test = /^[a-zA-Zа-яА-Я0-9]/.test(e.target.value);
    if (test) {
      setCityName(e.target.value.trim());
    } else {
      setCityName("");
    }
  };
  const addCard = (e: any) => {
    e.preventDefault();
    if (cityName !== "") {
      createCardWeather(cityName);
    }
    setCityName("");
  };

  return (
    <div className="center">
      <p className="titleHeader">Open Weather</p>
      <FormCity
        onSubmit={(e) => addCard(e)}
        value={cityName}
        onChange={onChange}
      />
    </div>
  );
};
