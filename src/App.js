import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Account from "./Pages/Account/Account";
import DefaultHome from "./Pages/Home/DefaultHome";

function App() {

  const SERVER_URL = window.ENV.REACT_APP_SERVER_URL; // this should be set in your .env file
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    await fetch(`${SERVER_URL}/getUserData`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
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
        {localStorage.getItem("accessToken") ? (
          <Route path="/account" element={<Account userData={userData}/>} />
        ) : (
          <Route path="/" element={<DefaultHome />} />
        )}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>

    // <NavBar />
  );
}

export default App;

