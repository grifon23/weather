import React, { FC } from "react";
import "./style.css";
export const EmptyMessage: FC = () => {
  return (
    <div className="emptyContainer">
      <p className="emptyText">...your weather</p>
    </div>
  );
};
