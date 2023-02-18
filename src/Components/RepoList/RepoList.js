import React, { useState, useEffect } from "react";
import RepoCard from "./RepoCard";

const RepoList = ({ userData, handleCheckboxChange }) => {
  const [userRepoList, setUserRepoList] = useState([{}]);

  function getUserRepos(userName) {
    return Promise.resolve(
      fetch(`https://api.github.com/users/${userName}/repos`)
    );
  }

  useEffect(() => {
    getUserRepos(userData.login)
      .then((response) => response.json())
      .then((data) => {
        setUserRepoList(data);
      });
  }, [userRepoList]);

  const editingProperties = {
    handleCheckboxChange: handleCheckboxChange,
    hasCheckBox: true,
    hasBorder: true,
    hasRepoNameTitle: true
  }

  const repoList = userRepoList.map((repo) => {
    return (
      <div className="grid-cs-3 grid-ce-10">
        <RepoCard
          repoData={repo}
          key={repo.id}
          editingProperties={editingProperties}
        />
      </div>
    );
  });

  return (
    <>
      <h2 className="grid-cs-2 grid-ce-10">Repo List</h2>
      <p className="grid-cs-2 grid-ce-10">
        The following is a list of all your <i>public</i> repos.
        <br />
        If you want to showcase any of these, simply click on the checkbox, and
        press the "Submit" button.
      </p>
      {/* <button className="btn--sm">Select All</button> */}
      {repoList}
    </>
  );
};

export default RepoList;
