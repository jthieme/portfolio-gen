import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
import DefaultHome from "./Pages/Home/DefaultHome";
import InteractiveEditor from "./Pages/Edit/InteractiveEditor";
import Preview from "./Pages/View/Preview";
import ErrorPage from "./Pages/Error";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

  const SERVER_URL = window.ENV.REACT_APP_SERVER_URL; // this should be set in your .env file
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const accessToken = localStorage.getItem("accessToken");

  async function getUserData() {
    await fetch(`${SERVER_URL}/getUserData`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }

  return (
    <Router>
      <NavBar userData={userData} />
      <Routes>
        { accessToken != null ? (
          <Route path="/home" element={<Home userData={userData}/>} />
        ) : (
          <Route path="/" element={<DefaultHome />} />
        )}
        <Route path={`/:username`} element={<Account userData={userData} />} />
        <Route path={`/${userData.login}/edit`} element={<InteractiveEditor userData={userData}/>} />
        <Route path={`/${userData.login}/preview`} element={<Preview />} />
        <Route path={`/${userData.login}/publish`} element={<Preview />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;


