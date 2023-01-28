import React, { useState, useEffect } from "react";
import RepoCard from "./RepoCard";

const RepoList = ({userData}) => {
       
    const getRepoList = async () => {
        await fetch(`https://api.github.com/users/${userData.login}/repos`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            accept: "application/vnd.github+json",
          }
        }).then((data)=>{
          console.log(data.url);
          return data;
        })
      };
      
      useEffect(() => {
        getRepoList();
      }, [])

    return (
        <>
        <h2>Repo List</h2>
        <RepoCard  />
        </>
    )
};

export default RepoList;