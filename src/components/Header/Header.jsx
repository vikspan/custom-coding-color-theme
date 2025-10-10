import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">
        Custom Coding <span className="main-header__accent">Color</span> Theme
      </h1>
      <p className="main-header__subtitle">
        Design your own color themes for languages like CSS and HTML, <br />
        see your changes in real time, and instantly generate matching VS Code settings.
      </p>
    </header>
  )
}

export default Header;
