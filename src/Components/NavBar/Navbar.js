import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavBar = ({ userData }) => {
  const [reRender, setReRender] = useState(false);
  // const [accessToken, setAccessToken] = useState(false);

  const SERVER_URL = window.ENV.REACT_APP_SERVER_URL; // this should be set in your .env file
  const CLIENT_ID = window.ENV.CLIENT_ID;

  const StyledAvatar = styled.img`
    border-radius: 50%;
    margin-top: 8px;
    margin-right: 5px;
    width: 35px;
    height: 35px;
  `;

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get("code");
    console.log(codeParams);

    if (codeParams && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch(`${SERVER_URL}/getAccessToken?code=` + codeParams, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setReRender(!reRender);
            }
          });
      }
      getAccessToken();
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("accessToken");
    // setReRender(!reRender);
    window.location.assign("http://localhost:3000");
  };

  const githubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=` + CLIENT_ID
    );
  };

  return (
    <>
      <div className="header header-dark u-unselectable header-animated px-0 px-2-md">
        <div className="header-brand">
          <div className="nav-item no-hover">
            <a href={localStorage.getItem("accessToken") ? "/home" : "/"}>
              <h6 className="tracking-tight">ProPort</h6>
            </a>
          </div>
        </div>
        {localStorage.getItem("accessToken") ? (
          <div className="header-nav text-white" id="header-menu">
            <div className="nav-right text">
              <div>
                <StyledAvatar src={userData.avatar_url} />
              </div>
              <div
                className="nav-item no-hover"
                style={{ padding: 0, cursor: "default" }}
              >
                <div style={{ padding: 5, cursor: "default" }}>
                  Hey, {userData.login}
                </div>
              </div>
              <div className="nav-item">
                <a
                  className="btn btn-white btn--sm py-0 hover-grow"
                  onClick={userLogout}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-right text">
            <div className="nav-item">
              <a
                className="btn btn-white btn--sm py-0 hover-grow"
                onClick={githubLogin}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
