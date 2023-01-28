import React, { useState } from "react";
import RepoCard from "../../Components/RepoList/RepoCard";
import Account from "../Account/Account";
import DefaultHome from "./DefaultHome";
const Home = ({ userData }) => {
  const [list, setList] = useState();

  async function getRepos() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      {localStorage.getItem("accessToken") ? (
        <>
          <Account />
        </>
      ) : (
        <>
          <DefaultHome />
        </>
      )}
    </>
  );
};

export default Home;
