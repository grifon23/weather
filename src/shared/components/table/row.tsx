import React, { FC } from "react";

interface IProps {
  title: string;
  value: any;
  icon: any;
}
export const Row: FC<IProps> = ({ title, value, icon }) => {
  return (
    <tr>
      <td style={{ width: "100" }}>
        <p className="textContent">{title}</p>
      </td>
      <td style={{ width: "100%" }}>
        <p className="textContent">{value}</p>
      </td>
      <td style={{ width: "100%" }}>{icon}</td>
    </tr>
  );
};
