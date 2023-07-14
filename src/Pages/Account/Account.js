// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import RepoList from "../../Components/RepoList/RepoList";
// import { useNavigate, useParams, Navigate } from "react-router-dom";

// const StyledDiv = styled.div`
//   border: 1px solid black;
//   border-radius: 15px;
//   color: white;
//   margin: 20px;
//   font-size: 1.1em;
// `;

// const Account = ({ userData }) => {

//   const { username } = useParams();
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//       const fetchedData = userData.login;
//       setData(fetchedData);
//   }, []);

//   useEffect(() => {
//     const fun = () => {
//       console.log("login", userData.login);
//       if (username !== data) {
//         // navigate("/404");
//         console.log("username", username)
//       }
//     }
//     fun();
//   }, [data]);


//   const [selectedRepos, setSelectedRepos] = useState([]);

//   // Define function to update selectedRepos state based on checkbox selection
//   const handleCheckboxChange = (repo) => {
//     if (selectedRepos.includes(repo)) {
//       setSelectedRepos(selectedRepos.filter((r) => r !== repo));
//     } else {
//       setSelectedRepos([...selectedRepos, repo]);
//     }
//   };


//   const handleClick = () => {
//     if (selectedRepos.length === 0) {
//       alert("You must select at least one repo to showcase.");
//     } else {

//       document.getElementById("submit-btn").classList.add("loading"); 
//       setTimeout(() => {navigate(`/${userData.login}/edit`, { state: { repos: selectedRepos } });}, 1000);
//     }
//   };
  
//   return (
//     <>
//     {data && (

//       <div className="grid grid-cols-12 u-gap-1">
//         <RepoList
//           userData={userData}
//           handleCheckboxChange={handleCheckboxChange}
//           />
//         <StyledDiv
//           id="submit-btn"
//           className="grid-cs-6 grid-ce-7 btn bg-orange-500 animated hide-text "
//           onClick={handleClick}
//           >
//           Submit
//         </StyledDiv>
//       </div>
//     )}
//     </>
//   );
// };

// export default Account;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RepoList from "../../Components/RepoList/RepoList";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../Components/Spinner";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  margin: 20px;
  font-size: 1.1em;
`;

const Account = ({ userData }) => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      return await Promise.resolve(userData);
    };
    
    const response = fetchData();
    response.then((d) => {
      setData(d.login)
      if (data !== null) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, [userData, loading]);

  const [selectedRepos, setSelectedRepos] = useState([]);

  // Define function to update selectedRepos state based on checkbox selection
  const handleCheckboxChange = (repo) => {
    if (selectedRepos.includes(repo)) {
      setSelectedRepos(selectedRepos.filter((r) => r !== repo));
    } else {
      setSelectedRepos([...selectedRepos, repo]);
    }
  };

  const handleClick = () => {
    if (selectedRepos.length === 0) {
      alert("You must select at least one repo to showcase.");
    } else {
      document.getElementById("submit-btn").classList.add("loading");
      setTimeout(() => {
        navigate(`/${userData.login}/edit`, { state: { repos: selectedRepos } });
      }, 1000);
    }
  };
console.log("username from url", username);
console.log("username from github", data);
  return (
    <>
      {loading && (
        <Spinner />
      )}
      {!loading && data !== null && username === data && (
        <div className="grid grid-cols-12 u-gap-1">
          <RepoList userData={userData} handleCheckboxChange={handleCheckboxChange} />
          <StyledDiv
            id="submit-btn"
            className="grid-cs-6 grid-ce-7 btn bg-orange-500 animated hide-text"
            onClick={handleClick}
          >
            Submit
          </StyledDiv>
        </div>
      )}
      {/* {data !== null && username !== data && (<Navigate to="/404" />)} */}
    </>
  );
};

export default Account;
