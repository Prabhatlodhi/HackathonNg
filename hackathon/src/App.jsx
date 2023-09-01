/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
