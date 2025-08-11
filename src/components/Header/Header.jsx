import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">
        Custom Coding <span className="main-header__accent">Color</span> Theme
      </h1>
      <p className="main-header__subtitle">
        Try out different colorings for CSS selectors, properties, and values, <br />
        and see how your code looks like in real time!
      </p>
    </header>
  )
}

export default Header;
