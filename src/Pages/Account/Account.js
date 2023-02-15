import React from "react";
import styled from "styled-components";
import RepoList from "../../Components/RepoList/RepoList";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  margin: 20px;
  font-size:1.1em;
`;

const Account = ({ userData }) => {
  // console.log(userData, "account page - user data")
  // console.log(userData.repos_url)

  const handleSubmit = () => {
    window.location = "http://localhost:3000/account/edit"
  };

  return (
    <>
        <div className="grid grid-cols-12 u-gap-1">
          <RepoList userData={userData} />
          <StyledDiv onClick={handleSubmit} className="grid-cs-6 grid-ce-7 btn bg-orange-500">Submit Selected</StyledDiv>
        </div>
    </>
  );
};

export default Account;
