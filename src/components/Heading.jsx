import React from "react";

const Heading = ({ heading, paragraph, className }) => {
  return (
    <div className={`${className || ""}`}>
      {heading && <h2>{heading}</h2>}
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
};

export default Heading;
