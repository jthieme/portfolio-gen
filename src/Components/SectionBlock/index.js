import React from "react";

const SectionBlock = ({title, content}) => {
  return (
    <div style={{ paddingTop: "4%", paddingLeft: "4%", paddingRight:"4%" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default SectionBlock;
