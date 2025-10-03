import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">
        Custom Coding <span className="main-header__accent">Color</span> Theme
      </h1>
      <p className="main-header__subtitle">
        Play with different syntax color schemes for CSS and HTML, <br />
        and see how your code looks like in real time!
      </p>
    </header>
  )
}

export default Header;
