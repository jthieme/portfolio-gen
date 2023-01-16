import React from "react";
// import { useEffect, useState } from "react";

const Login = () => {
  // const [reRender, setReRender] = useState(false);
  // const [userData, setUserData] = useState({});

  // const CLIENT_ID = "873e0714a324467e0176";

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const codeParams = urlParams.get("code");
  //   console.log(codeParams);

  //   if (codeParams && localStorage.getItem("accessToken") === null) {
  //     async function getAccessToken() {
  //       await fetch("http://localhost:4000/getAccessToken?code=" + codeParams, {
  //         method: "GET",
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           if (data.access_token) {
  //             localStorage.setItem("accessToken", data.access_token);
  //             setReRender(!reRender);
  //           }
  //         });
  //     }
  //     getAccessToken();
  //   }
  // }, []);

  // async function getUserData() {
  //   await fetch("http://localhost:4000/getUserData", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUserData(data);
  //     });
  // }

  // const githubLogin = () => {
  //   window.location.assign(
  //     `https://github.com/login/oauth/authorize?client_id=` + CLIENT_ID
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* {localStorage.getItem("accessToken") ? (
          <>
            <h1>We have the access token</h1>
            <button
              onClick={() => {
                localStorage.removeItem("accessToken");
                setReRender(!reRender);
              }}
            >
              Log out
            </button>
            <h3>Get User Data from Github API</h3>
            <button onClick={getUserData}>Get Data</button>
            {Object.keys(userData).length !== 0 ? (
              <>
                <h4>Hey there, {userData.login}</h4>
                <img width={100} height={100} src={userData.avatar_url}></img>
                <a href={userData.html_url} style={{ "color": "white", textDecoration: "underline" }}>
                  Link to user profile
                </a>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <h3>User is not logged in</h3>
            <button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={githubLogin}
            >
              Sign In with Github
            </button>
          </>
        )} */}
        <h2>Sanity Check for Login</h2>
      </header>
    </div>
  );
};

export default Login;