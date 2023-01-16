import React, { useState } from "react";
import RepoCard from "../../Components/RepoList/RepoCard";
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
          <div>List of Repos</div>
          <RepoCard />
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "Right",
              height: "100vh",
            }}
          >
            <h1>Sanity Check for Home</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
