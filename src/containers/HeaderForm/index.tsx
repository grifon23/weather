import React, { FC } from "react";
import { FormCity } from "../../components/FormCity";
import "./style.css";
interface IProps {
  onChange: (text: string) => void;
}
export const HeaderForm: FC<IProps> = ({ onChange }) => {
  return (
    <div className="center">
      <p className="titleHeader">Open Weather</p>
      {/*<FormCity onChange={onChange} />*/}
    </div>
  );
};
