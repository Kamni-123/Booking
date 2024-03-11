import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HeaderPage from './components/common/header/header';
import Login from "../src/components/common/Login/Login";
import IndexPage from "./components/common/IndexPage/IndexPage";
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}>
        
      </Route>
      <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout/>} />
    </Routes>
  );
}

export default App;
