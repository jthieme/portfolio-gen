import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronDown,
  faChevronUp,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import RepoCard from "../../Components/RepoList/RepoCard";

const Sidebar = ({
  changeFontColor,
  changeBackgroundColor,
  firstName,
  fontSize, 
  handleBorderSelection,
  handleColorChange,
  handleFontSizeChange,
  handleNameChange,
  lastName,
  resetFontColor,
  selectedColorType,
  title,
}) => {
  const options = [
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "26px",
    "28px",
    "30px",
    "32px",
    "34px",
    "36px",
    "38px",
    "40px",
    "42px",
    "44px",
    "46px",
    "48px",
    "50px",
    "52px",
    "54px",
    "56px",
    "58px",
    "60px",
    "62px",
    "64px",
    "66px",
    "68px",
    "70px",
    "72px",
    "74px",
    "76px",
    "78px",
    "80px",
    "82px",
    "84px",
    "86px",
    "88px",
    "90px",
    "92px",
    "94px",
    "96px",
    "98px",
    "100px",
  ];

  const optionElements = options.map((option, index) => (
    <option
      key={index}
      value={`${parseInt(option)}px`}
      selected={`${parseInt(option)}px` === fontSize}
    >
      {`${parseInt(option)}px`}
    </option>
  ));

  const [colorSelect,           setColorSelect          ] = useState(false);
  const [showCardOptions,       setShowCardOptions      ] = useState(false);
  const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);
  const [showFontOptions,       setShowFontOptions      ] = useState(false);

  return (
    <section
      style={{
        border: "1px solid black",
        marginRight: "1%",
        marginBottom: "5%",
        height: "650px",
        overflow: "auto",
      }}
      className="grid-c-4 grid-r-4"
    >
      <div
        style={{ marginTop: "2%" }}
        className="u-flex u-justify-space-evenly"
      >
        <button className="bg-gray-500 hover-grow">Save</button>
        <button className="btn-dark hover-grow">Preview</button>
        <button className="bg-orange-500 btn--lg hover-grow">Publish</button>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowFontOptions(!showFontOptions)}
      >
        <h5 style={{ textAlign: "center" }}>
          {showFontOptions ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }}/>
          ) : (
            <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "4%" }}/>
          )}
          Font Options
        </h5>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
      {showFontOptions && (
        <>
          <label>Font Size</label>
          <select
            className="input--xs"
            id="fontSize"
            value={fontSize}
            onChange={handleFontSizeChange}
            style={{ width: "20%" }}
          >
            {optionElements}
          </select>
          <label style={{marginLeft: "3%"}}>Font Color</label>
          <span>
            <div
              style={{
              display: "inline-block",
              backgroundColor: selectedColorType,
              width: "30px",
              height: "30px",
              borderRadius: "10%",
              marginRight: "10px",
              marginBottom: "-1.7%"
              }}
              onClick={() => setColorSelect(!colorSelect)}
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
              onClick={resetFontColor}
            > 
              <FontAwesomeIcon icon={faUndo} style={{ marginRight: "1%" }}/>
              Reset
            </span>
          </span>
          
          {colorSelect && (
            <div style={{ marginLeft: "5%" }}>
              <ChromePicker
                color={selectedColorType}
                onChange={handleColorChange}
              />
            </div>
          )}
          
          <label style={{ width: "80%" }}>First Name</label>
          <input
            className="input--sm"
            type="text"
            value={firstName}
            onChange={handleNameChange}
            name="firstName"
            placeholder="First Name"
            style={{ width: "58%", marginLeft: "5%" }}
          />
          <label style={{ width: "80%" }}>Last Name</label>
          <input
            className="input--sm"
            type="text"
            value={lastName}
            onChange={handleNameChange}
            name="lastName"
            placeholder="Last Name"
            style={{ width: "58%", marginLeft: "5%" }}
          />
          <label style={{ width: "80%" }}>Title</label>
          <input
            className="input--sm"
            type="text"
            value={title}
            onChange={handleNameChange}
            name="title"
            placeholder="Software Engineering Student"
            style={{ width: "58%", marginLeft: "5%" }}
          />
        </>
      )}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowBackgroundOptions(!showBackgroundOptions)}
      >
        <h5 style={{ textAlign: "center" }}>
        {showBackgroundOptions ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }}/>
          ) : (
            <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "4%" }}/>
          )}
          Background Options
        </h5>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
      {showBackgroundOptions && (
        <>
          <button className="btn--xs" onClick={changeBackgroundColor}>
            Change Background Color
          </button>
        </>
      )}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowCardOptions(!showCardOptions)}
      >
        <h5 style={{ textAlign: "center" }}>
        {showCardOptions ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }}/>
          ) : (
            <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "4%" }}/>
          )}
          Repo Card Options
        </h5>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
      {showCardOptions && (
        <>
          <div>Font Size</div>
          <div>Font Color</div>
          <div>Card Margin</div>
          <div>Card Padding</div>
          <div>
            <input
              id="check-dark"
              className="form-ext-input form-ext-input--dark"
              type="checkbox"
              onChange={handleBorderSelection}
              style={{ marginRight: "1%" }}
            />
            Border
          </div>
        </>
      )}      
    </section>
  );
};

const InteractivePanel = ({
  backgroundColor,
  border,
  fontColor,
  fontSize,
  firstName,
  lastName,
  selectedRepos,
  title,
  userData,
}) => {

  const editingProperties = {
    hasCheckBox: false,
    hasBorder: border,
    hasRepoNameTitle: false
  };

  const repoList = selectedRepos.map((repo) => {
    return (
      <div
        style={{ width: "80%", margin: "auto" }}
        className="grid-cs-3 grid-ce-10"
      >
        <RepoCard
          repoData={repo}
          key={repo.id}
          editingProperties={editingProperties}
        />
      </div>
    );
  });

  return (
    <section
      className="grid-c-8 grid-r-4"
      style={{
        border: "1px solid black",
        backgroundColor: backgroundColor,
        color: fontColor,
        height: "650px",
        marginLeft: "1%",
        overflow: "auto",
      }}
    >
      <div className="grid u-gap-1">
        <div className="grid-cs-2 grid-ce-10 grid-rs-1 grid-re-2">
          <div className="grid-c-8">
            <img
              style={{
                display: "inline",
                marginTop: "5%",
                borderRadius: "50%",
                border: "1px solid black",
                width: 200,
                height: 200,
              }}
              className="grid-cols-1"
              src={userData?.avatar_url}
            />
            <button
              className="btn--sm btn-light hover-grow"
              style={{
                marginLeft: "-17.5%",
                marginTop: "6%",
                border: "1px solid black",
              }}
            >
              Edit
            </button>

            <h2
              style={{
                marginTop: "-25%",
                marginLeft: "32%",
                fontSize: fontSize,
              }}
            >
              {firstName} {lastName}
            </h2>
            <h3
              style={{
                marginTop: "-3%",
                marginLeft: "32%",
                fontSize: fontSize,
              }}
            >
              {title}
            </h3>
          </div>
        </div>
        <div
          className="grid-c-3 grid-r-1 grid-cs-5 grid-ce-8"
          style={{
            padding: 40,
            marginTop: "24%",
            border: "1px solid black",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={() => console.log("click")}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "4%" }} />
          Add Content
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>{repoList}</div>
    </section>
  );
};

const InteractiveEditor = ({ userData }) => {
  // const [textSize, setTextSize] = useState("16px");
  const [backgroundColor,     setBackgroundColor    ] = useState("#fff");
  const [border,              setBorder             ] = useState(false);
  const [firstName,           setFirstName          ] = useState("First Name");
  const [fontColor,           setFontColor          ] = useState("#000");
  const [fontSize,            setFontSize           ] = useState("40px");
  const [lastName,            setLastName           ] = useState("Last Name");
  const [selectedColorTarget, setSelectedColorTarget] = useState("font");
  const [selectedColorType,   setSelectedColorType  ] = useState(fontColor);
  const [title,               setTitle              ] = useState("Software Engineering Student");

  const location = useLocation();
  const selectedRepos = location?.state?.repos;

  const handleBorderSelection = () => {
    setBorder(!border);
  };

  const changeFontColor = () => {
    setSelectedColorType(fontColor);
    setSelectedColorTarget("font");
  };

  const changeBackgroundColor = () => {
    setSelectedColorType(backgroundColor);
    setSelectedColorTarget("background");
  };

  const handleColorChange = (color) => {
    const { hex } = color;
    if (selectedColorTarget === "font") {
      setFontColor(hex);
    } else {
      setBackgroundColor(hex);
    }
    setSelectedColorType(hex);
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const resetFontColor = () => {
    setFontColor("#000000");
  }
  return (
    <main className="grid u-gap-1">
      <InteractivePanel
        backgroundColor={backgroundColor}
        border={border}
        fontColor={fontColor}
        fontSize={fontSize}
        firstName={firstName}
        lastName={lastName}
        selectedRepos={selectedRepos}
        title={title}
        userData={userData}
      />
      <Sidebar
        changeBackgroundColor={changeBackgroundColor}
        changeFontColor={changeFontColor}
        fontSize={fontSize}
        handleBorderSelection={handleBorderSelection}
        handleColorChange={handleColorChange}
        handleFontSizeChange={handleFontSizeChange}
        handleNameChange={handleNameChange}
        selectedColorType={selectedColorType}
        resetFontColor={resetFontColor}
      />
    </main>
  );
};

export default InteractiveEditor;
