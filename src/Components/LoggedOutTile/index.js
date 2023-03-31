import React from "react";

const LoggedOutTile = ({ title, content }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#40434E",
          width: "18%",
          paddingLeft: "1%",
          paddingRight: "1%",
          paddingTop: "1%",
          paddingBottom: "1%",
          borderRadius: "10%",
          display: "inline-block",
          marginLeft: "5%",
              
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "-8%", marginTop: "-1%" }}>{title}</h3>
        <div className="divider text-white" />
        <h5 >{content}</h5>
      </div>



      {/* <div style={{ padding: "2%", display: "inline-block" }}>
        <div
          class="card h-100p u-flex u-flex-column text-white"
          style={{
            maxWidth: "300px",
            padding: "8%",
            backgroundColor: "#40434E",
          }}
        >
          <div class="content u-text-center pt-3">
            <h3 id="projectname" class="title mt-2 mb-0">
              {title}
            </h3>
            <div className="divider text-white" />
            <h4>{content}</h4>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LoggedOutTile;
