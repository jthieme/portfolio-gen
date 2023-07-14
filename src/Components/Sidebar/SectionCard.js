import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faGripVertical,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
// import { useDrag } from "react-dnd";

const SectionCard = ({ section, index, removeSection, edit, sectionEdit }) => {
  const sectionType = section.name;

  const handleRemoveSection = () => {
    removeSection(section);
  };

  const handleSectionEdit = () => {
    sectionEdit(section);
  };

  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "SECTION_CARD",
  //   item: { index },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // }));

  // const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      key={index}
      style={{ padding: "1%", marginLeft: "22%", width: "60%" }}
    >
      <div
        style={{
          backgroundColor: "#e1e1e1",
          marginTop: "1%",
          padding: "0.5%",
          paddingLeft: "6%",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "left"
        }}
      >
        <span>
          <FontAwesomeIcon
            icon={faGripVertical}
            style={{ marginRight: "4%", cursor: "move" }}
          />
        </span>
        {sectionType}

        {edit && (
          <span
            style={{
              marginLeft: "35%",
              textAlign: "right",
              cursor: "pointer",
            }}
            onClick={handleSectionEdit}
          >
            <FontAwesomeIcon icon={faPencil} style={{ marginRight: "4%" }} />
          </span>
        )}
        <span
          style={{
            marginRight: "6%",
            textAlign: "right",
            cursor: "pointer",
          }}
          onClick={handleRemoveSection}
        >
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: "4%" }} />
        </span>
      </div>
    </div>
  );
};

export default SectionCard;
