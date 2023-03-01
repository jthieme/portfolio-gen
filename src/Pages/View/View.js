import React from "react";
import { useLocation } from "react-router-dom";

const View = () => {

    const location = useLocation();
    const documentAttributes = location?.state;

    console.log(documentAttributes);

    return (
        <p>View</p>
    )
};

export default View;