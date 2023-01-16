import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [reRender, setReRender] = useState(false);
  const [userData, setUserData] = useState({});

  const CLIENT_ID = "873e0714a324467e0176";

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get("code");
    console.log(codeParams);

    if (codeParams && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParams, {
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

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
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

  const userLogout = () => {
    localStorage.removeItem("accessToken");
    setReRender(!reRender);
  };

  const githubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=` + CLIENT_ID
    );
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "black" }}>
          <a href="/" className="brand-logo" style={{ marginLeft: 20 }}>
            ProPort
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {localStorage.getItem("accessToken") ? (
              <>
                <li>
                  <img
                    width="35"
                    height="35"
                    src={userData.avatar_url}
                    style={{
                      borderRadius: "50%",
                      marginRight: 10,
                      marginTop: 14,
                    }}
                  ></img>
                </li>
                <li>Hey, {userData.login}</li>
                <li onClick={userLogout}>
                  <a className="waves-effect waves-light btn" href="/">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    className="waves-effect waves-light btn"
                    onClick={githubLogin}
                  >
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
