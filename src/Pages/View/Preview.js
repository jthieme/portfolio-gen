import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionBlock from "../../Components/SectionBlock";
import RepoCard from "../../Components/RepoList/RepoCard";

const Preview = () => {

  useEffect(() => {
    
  }, []);

  const location = useLocation();
  const documentAttributes = location?.state;

  const { fontOptions, backgroundOptions, repoCardOptions, sectionOptions } =
    documentAttributes;

  console.log(documentAttributes);

  const editingProperties = {
    hasBorder: repoCardOptions.hasBorder,
    hasCheckBox: false,
  };

  console.log(sectionOptions.section);

  const sections = [];
  sectionOptions?.sections?.components?.forEach((section, key) => {
    if (section.$$typeof) {
      if (section.name === "AboutMe") {
        sections.push(
          <SectionBlock
            key={key}
            title="About Me"
            content={sectionOptions.sections?.aboutMe}
          />
        );
      }
      if (section.name === "ContactInfo") {
        sections.push(
          <SectionBlock
            key={key}
            title="Contact Info"
            content={sectionOptions.sections?.contactInfo}
          />
        );
      }
      if (section.name === "Summary") {
        sections.push(
          <SectionBlock
            key={key}
            title="Summary"
            content={sectionOptions.sections?.summary}
          />
        );
      }
      if (section.name === "WorkExperience") {
        sections.push(
          <SectionBlock
            key={key}
            title="Work Experience"
            content={sectionOptions.sections?.work}
          />
        );
      }
    } else {
      sections.push(
        <div
          key={key}
          style={{ width: "80%", margin: "auto" }}
          className="grid-cs-3 grid-ce-10"
        >
          <RepoCard repoData={section} editingProperties={editingProperties} />
        </div>
      );
    }
  });

  return (
    <section
      className="grid-c-8 grid-r-4"
      style={{
        backgroundColor: backgroundOptions.color,
        height: "650px",
        margin: "auto",
        overflow: "auto",
      }}
    >
      {!documentAttributes.isPublished && (
        <button
          className="bg-orange-500 btn--lg hover-grow"
          style={{ marginLeft: "85%" }}
        >
          Publish
        </button>
      )}
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
              src={documentAttributes.avatarImg}
            />
            {console.log(fontOptions.marginLeft)}
            <h2
              style={{
                marginTop: "-14%",
                marginLeft: fontOptions.marginLeft,
                fontSize: fontOptions.size,
                color: fontOptions.color,
              }}
            >
              {fontOptions.firstName} {fontOptions.lastName}
            </h2>
            <h3
              style={{
                marginTop: "-2%",
                marginLeft: "32%",
                fontSize: fontOptions.titleSize,
                color: fontOptions.color,
              }}
            >
              {fontOptions.title}
            </h3>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>{sections}</div>
    </section>
  );
};

export default Preview;
