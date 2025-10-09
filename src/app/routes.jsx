import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
