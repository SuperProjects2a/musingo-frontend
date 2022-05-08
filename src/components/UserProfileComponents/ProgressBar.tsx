import React from "react";

const ProgressBar = (props: any) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "orange",
    borderRadius: "inherit",
    textAlign: "right" as const,
  };

  const labelStyles = {
    fontSize: "12px",
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};
export default ProgressBar;
