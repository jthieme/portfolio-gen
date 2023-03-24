import React from "react";

const FontInput = ({labelText, value, handleChange, name, placeholder}) => {
  return (
    <>
      <label style={{ width: "80%" }}>{labelText}</label>
      <input
        className="input--sm"
        type="text"
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        style={{ width: "48%", marginLeft: "5%" }}
      />
    </>
  );
};

export default FontInput;
