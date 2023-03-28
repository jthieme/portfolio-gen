import React from "react";
import styled from "styled-components";
import globe from "../../assets/globe.jpg";
import LoggedOutTile from "../../Components/LoggedOutTile";

const largeDiv = styled.div`
  display: "flex",
  justifyContent: "center",
  alignItems: "Right",
  height: "20vh",
`;

const DefaultHome = () => {
  return (
    // <largeDiv>
    <div>
      <div style={{ marginTop: "-1.3%", height: "442px" }}>
        <img src={globe} style={{ width: "268.5%", height: "inherit" }} />
        <div style={{ marginTop: "-18%", display: "flex", marginLeft: "20%" }}>
          <h1
            className="text-white font-alt font-bold"
            style={{ textAlign: "center" }}
          >
            Sign up today. Get hired tomorrow.
          </h1>
          <button
            className="bg-orange-500 text-white"
            style={{ marginLeft: "3%" }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#1e1e1e" }} className="text-white">
        <h2 style={{ textAlign: "center", paddingTop: "2%" }}>What We Do</h2>
        <div style={{ padding: "5%", paddingLeft: "6%", display: "flex" }}>
          <LoggedOutTile
            title={"Content"}
            content={"Sign in with your GitHub account."}
          />
          <LoggedOutTile
            title={"Select"}
            content={"Choose exactly which repositories you want to showcase."}
          />
          <LoggedOutTile
            title={"Edit"}
            content={"Edit every property you can think of to make your Portfolio yours!"}
          />
          <LoggedOutTile
            title={"Share"}
            content={"When you’re done, Publish your portfolio for employers to see."}
          />
        </div>
      </div>
    </div>
    // </largeDiv>
  );
};

export default DefaultHome;
