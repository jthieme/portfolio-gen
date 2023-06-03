import React from "react";
import Folder from "./Folder";
import Earth from "../../assets/earth-in-space.jpg";

const Home = ({ userData }) => {
  console.log(userData);

  return (
    <>
      <div style={{ marginTop: "-1.3%", height: "500px" }}>
        <img src={Earth} alt="earth from space" />
        <div style={{ marginTop: "-50%" }}>
          <Folder userData={userData} />
        </div>
      </div>
    </>
  );
};

export default Home;
