import React from "react";
import { Route, Routes } from "react-router-dom";
import { Detailed } from "../../pages/Detailed";
import { Home } from "../../pages/Home";
export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detailed" element={<Detailed />} />
    </Routes>
  );
};
