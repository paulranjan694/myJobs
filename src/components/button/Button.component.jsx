import React from "react";
import { withRouter } from "react-router";
import "./Button.style.scss";

function Button({ type, Style, title, url, history }) {
  return (
    <button className="custom-btn" type={type ? type : ""} style={Style} onClick={ () => url && history.push(url)}>
      {title}
    </button>
  );
}

export default withRouter(Button);
