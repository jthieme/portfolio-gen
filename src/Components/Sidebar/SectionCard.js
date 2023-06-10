import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";

const SectionCard = ({ section, index, removeSection }) => {
  const sectionType =
    section.$$typeof
      ? section.type.name
      : section.name;

  const handleRemoveSection = () => {
    removeSection(section);
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
    <div key={index} style={{ padding: "1%", marginLeft: "28%", width: "50%" }}>
      <div
        style={{
          backgroundColor: "#e1e1e1",
          marginTop: "1%",
          padding: "0.5%",
          paddingLeft: "6%",
        }}
      >
        <span>
          <FontAwesomeIcon
            icon={faGripVertical}
            style={{ marginRight: "4%", cursor: "move" }}
          />
        </span>
        {sectionType}
        <span
          style={{
            marginLeft: "6%",
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
