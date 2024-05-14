import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HeaderPage from './components/common/header/header';
import Login from "../src/components/common/Login/Login";
import IndexPage from "./components/common/IndexPage/IndexPage";
import Layout from "./components/common/header/Layout";
import RegisterPage from "./components/common/Login/RegisterPage";
import axios from "axios";
import { UserContextProvider} from "./UserContext";
import AccountPage from "./components/common/IndexPage/AccountPage";


axios.defaults.baseURL = 'http://192.168.1.39:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
   
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path ="/account" element={<AccountPage/>}/>
      </Route>
      
    </Routes>
    </UserContextProvider>
  );
}

export default App;
