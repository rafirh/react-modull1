import React from "react";

function Alert({ type, header, children }) {
  return (
    <div className={type}>
      <h4>{header}</h4>
      {children}
    </div>
  );
}

export default Alert;
