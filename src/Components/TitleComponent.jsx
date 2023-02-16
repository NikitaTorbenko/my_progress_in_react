import React from "react";

const TitleComponent = ({ children, ...props }) => {
  return (
    <h1
      style={{
        fontSize: props.title.fontSize,
        color: props.title.color,
      }}
    >
      {children}
    </h1>
  );
};

export default TitleComponent;
