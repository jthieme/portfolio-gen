import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronDown,
  faChevronUp,
  faUndo,
  faBriefcase,
  faAddressCard,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import RepoCard from "../../Components/RepoList/RepoCard";
import AboutMe from "../../Components/AboutMe";
import WorkExperience from "../../Components/WorkExperience";
import Summary from "../../Components/Summary";
import ContactInfo from "../../Components/ContactInfo";

const Sidebar = ({
  changeFontColor,
  changeBackgroundColor,
  firstName,
  fontSize,
  handleBorderSelection,
  handleColorChange,
  handleFontSizeChange,
  handleTitleFontSizeChange,
  handleNameChange,
  handleNameMargin,
  lastName,
  nameMarginLeft,
  nameMarginTop,
  resetFontColor,
  selectedColorType,
  titleFontSize,
  portfolioAttributes,
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

  const navigate = useNavigate();

  function handlePreview() {
    navigate("/account/preview", { state: portfolioAttributes });
  }

  const optionElements = options.map((option, index) => (
    <option
      key={index}
      value={`${parseInt(option)}px`}
      selected={`${parseInt(option)}px` === fontSize}
    >
      {`${parseInt(option)}px`}
    </option>
  ));

  const [colorSelect, setColorSelect] = useState(false);
  const [showCardOptions, setShowCardOptions] = useState(false);
  const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);
  const [showFontOptions, setShowFontOptions] = useState(false);

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
        <button className="btn-dark hover-grow" onClick={handlePreview}>
          Preview
        </button>
        <button className="bg-orange-500 btn--lg hover-grow">Publish</button>
      </div>
      <div className="divider" style={{ marginTop: "-2%" }} />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowFontOptions(!showFontOptions)}
      >
        <h5 style={{ textAlign: "center" }}>
          {showFontOptions ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }} />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginRight: "4%" }}
            />
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
          <label style={{ marginLeft: "3%" }}>Font Color</label>
          <span>
            <div
              style={{
                display: "inline-block",
                backgroundColor: selectedColorType,
                width: "30px",
                height: "30px",
                borderRadius: "10%",
                marginRight: "10px",
                marginBottom: "-1.7%",
                cursor: "pointer",
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
              <FontAwesomeIcon icon={faUndo} style={{ marginRight: "1%" }} />
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

          <div class="form-group" style={{ marginLeft: "2%", width: "95%" }}>
            <label class="form-group-label label--xs">Spacing</label>
            <input
              type="text"
              class="form-group-input input--xs"
              placeholder="Width"
              name="nameMarginLeft"
              value={nameMarginLeft}
              onChange={handleNameMargin}
            />
            <input
              type="text"
              class="form-group-input input--xs"
              placeholder="Height"
              name="nameMarginTop"
              value={nameMarginTop}
              onChange={handleNameMargin}
            />
            <button class="form-group-btn btn--xs">Clear</button>
            <button class="form-group-btn btn-dark btn--xs">Submit</button>
          </div>

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
          <label>Font Size</label>
          <select
            className="input--xs"
            id="fontSize"
            value={titleFontSize}
            onChange={handleTitleFontSizeChange}
            style={{ width: "20%" }}
          >
            {optionElements}
          </select>
        </>
      )}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowBackgroundOptions(!showBackgroundOptions)}
      >
        <h5 style={{ textAlign: "center" }}>
          {showBackgroundOptions ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }} />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginRight: "4%" }}
            />
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
            <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "4%" }} />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginRight: "4%" }}
            />
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
          <div>List View</div>
          <div>Carousel View</div>
          <div>Card View</div>
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
  nameMarginLeft,
  nameMarginTop,
  selectedRepos,
  selectedImage,
  setSelectedImage,
  title,
  titleFontSize,
  userData,
}) => {
  const editingProperties = {
    hasCheckBox: false,
    hasBorder: border,
    hasRepoNameTitle: false,
  };

  const [populateOptions, setPopulateOptions] = useState(false);

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

  const handleAddComponentSection = (component) => {
    const container = document.createElement("div");
    container.id = "injected";
    container.className = "grid-cs-2 grid-ce-11";
    ReactDOM.render(component, container);
    document.getElementById("test").appendChild(container);
  };

  return (
    <section
      className="grid-c-8 grid-r-4"
      style={{
        border: "1px solid black",
        backgroundColor: backgroundColor,
        // color: fontColor,
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
            <input
              type="file"
              accept="image/*"
              id="select-img"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <button
              className="btn--sm btn-light hover-grow"
              style={{
                marginLeft: "-17.5%",
                marginTop: "6%",
                border: "1px solid black",
              }}
              htmlFor="select-img"
              onClick={() => document.getElementById("select-img")?.click()}
            >
              Edit
            </button>

            <h2
              style={{
                marginTop: nameMarginTop,
                marginLeft: nameMarginLeft,
                fontSize: fontSize,
                color: fontColor,
              }}
            >
              {firstName} {lastName}
            </h2>
            <h3
              style={{
                marginTop: "-3%",
                marginLeft: "32%",
                fontSize: titleFontSize,
                color: fontColor,
              }}
            >
              {title}
            </h3>
          </div>
        </div>
        <div
          className="grid-c-3 grid-r-1 grid-cs-5 grid-ce-7"
          style={{
            padding: 20,
            marginTop: "40%",
            border: "1px solid black",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={() => {
            setPopulateOptions(!populateOptions);
          }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "4%" }} />
          Add Content
        </div>
        {populateOptions && (
          <div className="grid-c-4 grid-r-1 grid-cs-4 grid-ce-8">
            <div class="u-z-10 ... bg-gray-000 u-shadow-xl u-round-xs row u-gap-2 p-0 u-justify-center">
              <div class="u-flex u-justify-space-evenly">
                <div
                  class="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add About Me"
                  onClick={() => handleAddComponentSection(<AboutMe />)}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div
                  class="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Work Experience"
                  onClick={() => handleAddComponentSection(<WorkExperience />)}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div
                  class="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Summary"
                  onClick={() => handleAddComponentSection(<Summary />)}
                >
                  <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <div
                  class="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Contact Info"
                  onClick={() => handleAddComponentSection(<ContactInfo />)}
                >
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ marginTop: "5%" }}>{repoList}</div>
      <div className="grid u-gap-1" id="test"></div>
    </section>
  );
};

const InteractiveEditor = ({ userData }) => {
  // const [textSize, setTextSize] = useState("16px");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [border, setBorder] = useState(false);
  const [firstName, setFirstName] = useState("First Name");
  const [fontColor, setFontColor] = useState("#000");
  const [fontSize, setFontSize] = useState("40px");
  const [lastName, setLastName] = useState("Last Name");
  const [selectedColorTarget, setSelectedColorTarget] = useState("font");
  const [selectedColorType, setSelectedColorType] = useState(fontColor);
  const [title, setTitle] = useState("Software Engineering Student");
  const [titleFontSize, setTitleFontSize] = useState("20px");
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameMarginLeft, setNameMarginLeft] = useState("32%");
  const [nameMarginTop, setNameMarginTop] = useState("-25%");

  const location = useLocation();
  const selectedRepos = location?.state?.repos;

  const portfolioAttributes = {
    avatarImg: userData.avatar_url,
    chosenImg: selectedImage,
    fontOptions: {
      firstName: firstName,
      lastName: lastName,
      title: title,
      titleSize: titleFontSize,
      size: fontSize,
      color: selectedColorType,
      marginLeft: nameMarginLeft,
      marginTop: nameMarginTop,
    },
    backgroundOptions: {
      color: "",
    },
    repoCardOptions: {
      repoList: selectedRepos,
      hasBorder: border,
      fontOptions: {
        size: "",
        color: "",
      },
    },
  };

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

  const handleNameMargin = (e) => {
    const { name, value } = e.target;
    if (name === "nameMarginLeft") {
      setNameMarginLeft(value);
    } else if (name === "nameMarginTop") {
      setNameMarginTop(value);
    }
  };
  

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleTitleFontSizeChange = (e) => {
    setTitleFontSize(e.target.value);
  };

  const resetFontColor = () => {
    setFontColor("#000000");
    setSelectedColorType("#000000");
  };

  return (
    <main className="grid u-gap-1">
      <InteractivePanel
        backgroundColor={backgroundColor}
        border={border}
        fontColor={fontColor}
        fontSize={fontSize}
        firstName={firstName}
        lastName={lastName}
        nameMarginLeft={nameMarginLeft}
        nameMarginTop={nameMarginTop}
        selectedRepos={selectedRepos}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        title={title}
        titleFontSize={titleFontSize}
        userData={userData}
      />
      <Sidebar
        changeBackgroundColor={changeBackgroundColor}
        changeFontColor={changeFontColor}
        fontSize={fontSize}
        handleBorderSelection={handleBorderSelection}
        handleColorChange={handleColorChange}
        handleFontSizeChange={handleFontSizeChange}
        handleTitleFontSizeChange={handleTitleFontSizeChange}
        handleNameMargin={handleNameMargin}
        handleNameChange={handleNameChange}
        nameMarginLeft={nameMarginLeft}
        nameMarginTop={nameMarginTop}
        selectedColorType={selectedColorType}
        titleFontSize={titleFontSize}
        resetFontColor={resetFontColor}
        portfolioAttributes={portfolioAttributes}
      />
    </main>
  );
};

export default InteractiveEditor;
