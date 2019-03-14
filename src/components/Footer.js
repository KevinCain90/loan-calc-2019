import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <span className="text">© Afford It Now</span>
          <span className="spacer">·</span>
        </div>
      </div>
    );
  }
}

export default Footer;
