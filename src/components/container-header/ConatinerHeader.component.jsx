import React from "react";
import "./ContainerHeader.style.scss";

function ConatinerHeader({title}) {
  return (
    <div className="login__header">
      <div className="header__title">{title}</div>
    </div>
  );
}

export default ConatinerHeader;
