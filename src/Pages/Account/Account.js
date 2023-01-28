import React from "react";
import RepoList from "../../Components/RepoList/RepoList";

const Account = ({userData}) => {
  console.log(userData, "account page - user data")
  console.log(userData.repos_url)
  return (
    <>
      <div>List of Repos</div>
      <RepoList userData={userData} />
    </>
  );
};

export default Account;
