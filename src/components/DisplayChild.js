import React from "react";

const DisplayChild = ({ func, text }) => {
  return (
    <span>
      {func} <small>{text}</small>
    </span>
  );
};

DisplayChild.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

export default DisplayChild;
