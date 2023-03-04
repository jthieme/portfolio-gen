import React from "react";
import { useLocation } from "react-router-dom";
import RepoCard from "../../Components/RepoList/RepoCard";

const View = () => {
  const location = useLocation();
  const documentAttributes = location?.state;

  const {fontOptions, backgroundOptions, repoCardOptions} = documentAttributes;

  console.log(documentAttributes);

  const editingProperties = {
    hasBorder: repoCardOptions.hasBorder,
    hasCheckBox: false,
  };

  const repoList = repoCardOptions?.repoList?.map((repo) => {
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
        backgroundColor: backgroundOptions.color,
        height: "650px",
        margin: "auto",
        overflow: "auto",
      }}
    >
      
      <button className="bg-orange-500 btn--lg hover-grow"
      style={{marginLeft: "85%"}}>Publish</button>
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

            <h2
              style={{
                marginTop: "-14%",
                marginLeft: "32%",
                fontSize: fontOptions.size,
                color: fontOptions.color
              }}
            >
              {fontOptions.firstName} {fontOptions.lastName}
            </h2>
            <h3
              style={{
                marginTop: "-2%",
                marginLeft: "32%",
                fontSize: fontOptions.titleSize,
                color: fontOptions.color
              }}
            >
              {fontOptions.title}
            </h3>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>{repoList}</div>
    </section>
  );
};

export default View;
