import React, { FC } from "react";
import { ReactComponent as IconBusket } from "../../../assets/icons/iconDelete.svg";
interface IProps {
  onClick: () => void;
}
export const BtnDel: FC<IProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "center",
        border: "none",
        opacity: 0.5,
      }}
    >
      <IconBusket height={20} />
    </button>
  );
};
