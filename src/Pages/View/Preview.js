import React from "react";
import { useLocation } from "react-router-dom";
import RepoCard from "../../Components/RepoList/RepoCard";

const View = () => {
  const location = useLocation();
  const documentAttributes = location?.state;

  console.log(documentAttributes);

  const editingProperties = {
    hasBorder: documentAttributes.repoCardOptions.hasBorder,
    hasCheckBox: false,
  };

  const repoList = documentAttributes?.repoCardOptions?.repoList?.map((repo) => {
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
        backgroundColor: documentAttributes.backgroundOptions.color,
        height: "650px",
        margin: "auto",
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
              src={documentAttributes.avatarImg}
            />

            <h2
              style={{
                marginTop: "-14%",
                marginLeft: "32%",
                fontSize: documentAttributes.fontOptions.size,
                color: documentAttributes.fontOptions.color
              }}
            >
              {documentAttributes.fontOptions.firstName} {documentAttributes.fontOptions.lastName}
            </h2>
            <h3
              style={{
                marginTop: "-2%",
                marginLeft: "32%",
                fontSize: documentAttributes.fontOptions.size,
                color: documentAttributes.fontOptions.color
              }}
            >
              {documentAttributes.fontOptions.title}
            </h3>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>{repoList}</div>
    </section>
  );
};

export default View;
