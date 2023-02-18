import React, { useState } from "react";
import styled from "styled-components";
import RepoList from "../../Components/RepoList/RepoList";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  margin: 20px;
  font-size: 1.1em;
`;

const Account = ({ userData }) => {

  const [selectedRepos, setSelectedRepos] = useState([]);

  // Define function to update selectedRepos state based on checkbox selection
  const handleCheckboxChange = (repo) => {
    if (selectedRepos.includes(repo)) {
      setSelectedRepos(selectedRepos.filter((r) => r !== repo));
    } else {
      setSelectedRepos([...selectedRepos, repo]);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (selectedRepos.length === 0) {
      alert("You must select at least one repo to showcase.");
    } else {

      document.getElementById("submit-btn").classList.add("loading"); 
      setTimeout(() => {navigate("/account/edit", { state: { repos: selectedRepos } });}, 1000);
    }
  };
  
  return (
    <>
      <div className="grid grid-cols-12 u-gap-1">
        <RepoList
          userData={userData}
          handleCheckboxChange={handleCheckboxChange}
        />
        <StyledDiv
          id="submit-btn"
          className="grid-cs-6 grid-ce-7 btn bg-orange-500 animated hide-text "
          onClick={handleClick}
        >
          Submit
        </StyledDiv>
      </div>
    </>
  );
};

export default Account;
