import React from "react";
import "../styles/App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <div className="banner">
            <h1 className="bannerTitle">React App</h1>
            <p className="bannerDesc">Example Loan Calculator App</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
