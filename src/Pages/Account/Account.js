import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RepoList from "../../Components/RepoList/RepoList";
import InteractiveEditor from "../Edit/InteractiveEditor";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  margin: 20px;
  font-size: 1.1em;
`;

const Account = ({ userData }) => {
  // console.log(userData, "account page - user data")
  // console.log(userData.repos_url)

  const [selectedRepos, setSelectedRepos] = useState([]);

  // Define function to update selectedRepos state based on checkbox selection
  const handleCheckboxChange = (repo) => {
    if (selectedRepos.includes(repo)) {
      setSelectedRepos(selectedRepos.filter((r) => r !== repo));
    } else {
      setSelectedRepos([...selectedRepos, repo]);
    }
  };

  useEffect(() => {
    console.log(selectedRepos, "selectedRepos");
  }, [selectedRepos]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account/edit", { state: { repos: selectedRepos } });
  };

  return (
    <>
      <div className="grid grid-cols-12 u-gap-1">
        <RepoList
          userData={userData}
          handleCheckboxChange={handleCheckboxChange}
        />
        <StyledDiv
          className="grid-cs-6 grid-ce-7 btn bg-orange-500"
          onClick={handleClick}
        >
          Submit
        </StyledDiv>
      </div>
    </>
  );
};

export default Account;
