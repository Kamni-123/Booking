import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HeaderPage from './components/common/header/header';
import Login from "../src/components/common/Login/Login";
import IndexPage from "./components/common/IndexPage/IndexPage";
import Layout from "./components/common/header/Layout";
import RegisterPage from "./components/common/Login/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<IndexPage />} />
      

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      </Route>
      
    </Routes>
  );
}

export default App;
