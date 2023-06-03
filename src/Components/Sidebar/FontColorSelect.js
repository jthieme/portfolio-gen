import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { ChromePicker } from "react-color";

const FontColorSelect = ({
  bgColor,
  cPColor,
  cPChange,
  colorSelect,
  setColor,
  resetColor,
}) => {
  return (
    <>
      <label style={{ marginLeft: "3%" }}>Font Color</label>
      <span>
        <div
          style={{
            display: "inline-block",
            backgroundColor: bgColor,
            width: "30px",
            height: "30px",
            borderRadius: "10%",
            marginRight: "10px",
            marginBottom: "-1.7%",
            cursor: "pointer",
          }}
          onClick={setColor}
        ></div>
        <span
          style={{
            borderRadius: "8%",
            cursor: "pointer",
            backgroundColor: "#e0e0e0",
            paddingTop: "1%",
            paddingRight: "2%",
            paddingBottom: "1%",
            paddingLeft: "2%",
          }}
          onClick={resetColor}
        >
          <FontAwesomeIcon icon={faUndo} style={{ marginRight: "1%" }} />
          Reset
        </span>
      </span>

      {colorSelect && (
        <div style={{ marginLeft: "5%" }}>
          <ChromePicker color={cPColor} onChange={cPChange} />
        </div>
      )}
    </>
  );
};

export default FontColorSelect;
