import React from "react";
import { Routes, Route } from "react-router-dom";
import MyLayout from "./components/Layout/MyLayout";
import Home from "./components/Home/home";
import AddUser from "./components/UserAndRoles/AddUser";

const AppRoutes = () => (
  <Routes>
    <Route element={<MyLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />

    </Route>
  </Routes>
);

export default AppRoutes;
