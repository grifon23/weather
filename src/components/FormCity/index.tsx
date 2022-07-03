import React, { FC } from "react";
import "./style.css";
interface IProps {
  onChange: (e: any) => void;
  value: string;
  getCity: (e: any) => void;
}
export const FormCity: FC<IProps> = ({ onChange, value, getCity }) => {
  return (
    <form className="form" onSubmit={(e) => getCity(e)}>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        className="inputCity"
        type="text"
        placeholder="...enter city"
      />
      <button type="submit" className="btn btn-primary" style={{}}>
        Add city
      </button>
    </form>
  );
};
