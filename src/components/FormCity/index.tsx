import React, { FC } from "react";
import "./style.css";
interface IProps {
  onChange: (e: any) => void;
  value: string;
  onSubmit: (e: any) => void;
}
export const FormCity: FC<IProps> = ({ onChange, value, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        className="inputCity"
        type="text"
        placeholder="...enter city"
      />
      <button type="submit" className="btn btn-primary">
        Add city
      </button>
    </form>
  );
};
