import React, { useState } from "react";

const Home = ({ userData }) => {
  
  const handleClick = () => {
    window.location.assign(`http://localhost:3000/${userData.login}`);
  }
  
  return (
    <>
      <div>Home Page</div>
      <button onClick={handleClick}>Go to account</button>
    </>
  );
};

export default Home;
