import React, {useState, useEffect} from "react";

const NavBar = () => {

  // const [reRender, setReRender] = useState(false);
  // const [userData, setUserData] = useState({});
  // const [userRepos, setUserRepos] = useState({});

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
  

  
  return (
    <>
      <nav>
        <div className="nav-wrapper" style={{backgroundColor:"black"}}>
          <a href='/' className="brand-logo" style={{marginLeft:20}}>
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
