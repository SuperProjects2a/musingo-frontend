import React from "react";

const ProgressBar = (props: any) => {
  const { completed } = props;

  const containerStyles = {
    height: 5,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "orange",
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};
export default ProgressBar;
