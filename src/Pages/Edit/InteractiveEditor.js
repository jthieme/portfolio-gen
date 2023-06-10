import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
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
import SpacingInput from "../../Components/Sidebar/SpacingInput";
import DropDownOptions from "../../Components/Sidebar/DropDownOptions";
import FontInput from "../../Components/Sidebar/FontInput";
import FontColorSelect from "../../Components/Sidebar/FontColorSelect";
import SectionCard from "../../Components/Sidebar/SectionCard";
import { DndContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  handleRepoCardFontColor,
  handleRepoCardFontSize,
  handleRepoMargin,
  lastName,
  nameMarginLeft,
  nameMarginTop,
  repoMarginLeft,
  repoMarginBottom,
  resetFontColor,
  resetRepoFontColor,
  // removeSection,
  repoCardFontColor,
  repoCardFontSize,
  sectionComponents,
  setSectionComponents,
  selectedColorType,
  titleFontSize,
  portfolioAttributes,
  title,
  userData,
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

  console.log(sectionComponents);
  const navigate = useNavigate();

  function handlePreview() {
    navigate(`/${userData.login}/preview`, { state: portfolioAttributes });
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

  const removeSection = (sectionToRemove) => {
    const updatedSections = sectionComponents.filter((section) => section !== sectionToRemove);
    setSectionComponents(updatedSections);
  };

  const [colorSelect, setColorSelect] = useState(false);
  const [repoColorSelect, setRepoColorSelect] = useState(false);
  const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);
  const [showCardOptions, setShowCardOptions] = useState(false);
  const [showFontOptions, setShowFontOptions] = useState(false);
  const [showSectionOptions, setShowSectionOptions] = useState(false);

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

      <DropDownOptions
        showFunction={() => setShowFontOptions(!showFontOptions)}
        showOption={showFontOptions}
        hLabel={"Font Options"}
      />
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

          <FontColorSelect
            bgColor={selectedColorType}
            cPChange={handleColorChange}
            cPColor={selectedColorType}
            colorSelect={colorSelect}
            setColor={() => setColorSelect(!colorSelect)}
            resetColor={resetFontColor}
          />

          <SpacingInput
            labelText={"X"}
            name="nameMarginLeft"
            nameMargin={nameMarginLeft}
            handleMargin={handleNameMargin}
          />
          <SpacingInput
            labelText={"Y"}
            name="nameMarginTop"
            nameMargin={nameMarginTop}
            handleMargin={handleNameMargin}
          />

          <FontInput
            labelText={"First Name"}
            value={firstName}
            handleChange={handleNameChange}
            name={"firstName"}
            placeholder={"First Name"}
          />
          <FontInput
            labelText={"Last Name"}
            value={lastName}
            handleChange={handleNameChange}
            name={"lastName"}
            placeholder={"Last Name"}
          />
          <FontInput
            labelText={"Title"}
            value={title}
            handleChange={handleNameChange}
            name={"title"}
            placeholder={"Software Engineering Student"}
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

      <DropDownOptions
        showFunction={() => setShowBackgroundOptions(!showBackgroundOptions)}
        showOption={showBackgroundOptions}
        hLabel={"Background Options"}
      />
      {showBackgroundOptions && (
        <>
          <button className="btn--xs" onClick={changeBackgroundColor}>
            Change Background Color
          </button>
        </>
      )}

      <DropDownOptions
        showFunction={() => setShowCardOptions(!showCardOptions)}
        showOption={showCardOptions}
        hLabel={"Repo Card Options"}
      />

      {showCardOptions && (
        <>
          <FontInput
            labelText={"Font Size"}
            value={repoCardFontSize}
            handleChange={handleRepoCardFontSize}
            placeholder={"Font Size"}
          />

          <FontColorSelect
            bgColor={repoCardFontColor}
            cPChange={handleRepoCardFontColor}
            cPColor={repoCardFontColor}
            colorSelect={repoColorSelect}
            setColor={() => setRepoColorSelect(!repoColorSelect)}
            resetColor={resetRepoFontColor}
          />

          <label>Card Margin</label>
          <SpacingInput
            labelText={"X"}
            name="repoMarginLeft"
            nameMargin={repoMarginLeft}
            handleMargin={handleRepoMargin}
          />

          <SpacingInput
            labelText={"Y"}
            name="repoMarginBottom"
            nameMargin={repoMarginBottom}
            handleMargin={handleRepoMargin}
          />

          <div style={{ marginLeft: "1.2%" }}>
            <label style={{ marginRight: "-1px" }}>Card Padding</label>
            <SpacingInput
              labelText={"X"}
              name="nameMarginLeft"
              nameMargin={nameMarginLeft}
              handleMargin={handleNameMargin}
            />

            <SpacingInput
              labelText={"Y"}
              name="nameMarginTop"
              nameMargin={nameMarginTop}
              handleMargin={handleNameMargin}
            />

            <div
              style={{
                marginLeft: "1.2%",
                marginRight: "2%",
                display: "inline",
              }}
            >
              Border
              <input
                id="check-dark"
                className="form-ext-input form-ext-input--dark"
                type="checkbox"
                onChange={handleBorderSelection}
                style={{ paddingLeft: "1%", marginLeft: "1%" }}
              />
            </div>
          </div>

          {/* <div>List View</div>
          <div>Carousel View</div>
          <div>Card View</div> */}
        </>
      )}

      <DropDownOptions
        showFunction={() => setShowSectionOptions(!showSectionOptions)}
        showOption={showSectionOptions}
        hLabel={"Section Options"}
      />
      <div id="blank">
        {showSectionOptions &&
          sectionComponents.length > 0 &&
          sectionComponents.map((section, index) => (
            <SectionCard section={section} index={index} removeSection={removeSection}/>
          ))}
        {showSectionOptions && sectionComponents.length === 0 && (
          <p>No data in the Sections</p>
        )}
      </div>
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
  repoCardFontColor,
  repoCardFontSize,
  repoMarginLeft,
  repoMarginBottom,
  sectionComponents,
  setSectionComponents,
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
    fontSize: repoCardFontSize,
    fontColor: repoCardFontColor,
    marginLeft: repoMarginLeft,
    marginBottom: repoMarginBottom,
  };

  const [populateOptions, setPopulateOptions] = useState(false);

  const sections = sectionComponents.map((section) => {
    if (section.$$typeof) {
      if (section.type.name === "AboutMe") {
        return <AboutMe />;
      }
      if (section.type.name === "ContactInfo") {
        return <ContactInfo />;
      }
      if (section.type.name === "Summary") {
        return <Summary />;
      }
      if (section.type.name === "WorkExperience") {
        return <WorkExperience />;
      }
    } else {
      return (
        <div
          style={{ width: "80%", margin: "auto" }}
          className="grid-cs-3 grid-ce-10"
        >
          <RepoCard
            repoData={section}
            key={section.id}
            editingProperties={editingProperties}
          />
        </div>
      );
    }
  });

  const handleAddComponentSection = (component) => {
    if (sectionComponents.includes(component)) {
      window.alert(`${component} is already in the portfolio`);
      // console.log(`${component} is already in the portfolio`);
    } else {
      setSectionComponents((prevSections) => [...prevSections, component]);
    }
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
            <div className="u-z-10 ... bg-gray-000 u-shadow-xl u-round-xs row u-gap-2 p-0 u-justify-center">
              <div className="u-flex u-justify-space-evenly">
                <div
                  className="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add About Me"
                  onClick={() => {
                    handleAddComponentSection({$$typeof: "component", type: {name: "AboutMe"}});
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div
                  className="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Work Experience"
                  onClick={() => handleAddComponentSection({$$typeof: "component", type: {name: "WorkExperience"}})}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div
                  className="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Summary"
                  onClick={() => handleAddComponentSection({$$typeof: "component", type: {name: "Summary"}})}
                >
                  <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <div
                  className="bg-gray-200 u-shadow-xl px-2 py-1 m-1 u-round-xs tooltip"
                  data-tooltip="Add Contact Info"
                  onClick={() => handleAddComponentSection({$$typeof: "component", type: {name: "ContactInfo"}})}
                >
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ marginTop: "5%" }}>{sections}</div>
    </section>
  );
};

const InteractiveEditor = ({ userData }) => {
  const location = useLocation();
  const selectedRepos = location?.state?.repos;

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
  const [repoCardFontColor, setRepoCardFontColor] = useState(fontColor);
  const [repoCardFontSize, setRepoCardFontSize] = useState("20px");
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameMarginLeft, setNameMarginLeft] = useState("32%");
  const [nameMarginTop, setNameMarginTop] = useState("-25%");
  const [repoMarginLeft, setRepoMarginLeft] = useState("2%");
  const [repoMarginBottom, setRepoMarginBottom] = useState("0%");
  const [sectionComponents, setSectionComponents] = useState(selectedRepos);

  // const removeSection = (component) => {
  //   let index = sections.indexOf(component);
  //   sections.splice(index, 1);
  // };

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
      // repoList: selectedRepos,
      hasBorder: border,
      fontOptions: {
        size: "",
        color: "",
      },
    },
    sectionOptions: {
      sections: sectionComponents
    }
  };

  const handleBorderSelection = () => {
    setBorder(!border);
  };

  const handleRepoCardFontColor = (color) => {
    const { hex } = color;
    setRepoCardFontColor(hex);
  };

  const handleRepoCardFontSize = (e) => {
    setRepoCardFontSize(e.target.value);
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

  const handleRepoMargin = (e) => {
    const { name, value } = e.target;
    if (name === "repoMarginLeft") {
      setRepoMarginLeft(value);
    } else if (name === "repoMarginBottom") {
      setRepoMarginBottom(value);
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

  const resetRepoFontColor = () => {
    setRepoCardFontColor("#000000");
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
        repoMarginLeft={repoMarginLeft}
        repoMarginBottom={repoMarginBottom}
        repoCardFontColor={repoCardFontColor}
        repoCardFontSize={repoCardFontSize}
        sectionComponents={sectionComponents}
        setSectionComponents={setSectionComponents}
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
        handleRepoMargin={handleRepoMargin}
        handleRepoCardFontColor={handleRepoCardFontColor}
        handleRepoCardFontSize={handleRepoCardFontSize}
        nameMarginLeft={nameMarginLeft}
        nameMarginTop={nameMarginTop}
        repoMarginLeft={repoMarginLeft}
        repoMarginBottom={repoMarginBottom}
        repoCardFontColor={repoCardFontColor}
        repoCardFontSize={repoCardFontSize}
        sectionComponents={sectionComponents}
        setSectionComponents={setSectionComponents}
        selectedColorType={selectedColorType}
        titleFontSize={titleFontSize}
        resetFontColor={resetFontColor}
        resetRepoFontColor={resetRepoFontColor}
        portfolioAttributes={portfolioAttributes}
        userData={userData}
      />
    </main>
  );
};

export default InteractiveEditor;
