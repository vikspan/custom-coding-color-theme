import React, { useState } from "react";
import "./CodeBlock.scss";
import Button from "../common/Button/Button";
import CSSCode from "./CSSCode";
import HTMLCode from "./HTMLCode";

const CodeBlock = ({ hasToggle = false, colorScheme, isDarkTheme = false, handleDark, language }) => {

  const colors = Object.fromEntries(
    colorScheme.map(({ construct, color }) => [construct, color])
  );

  return (
    <div className={"code-block" + (isDarkTheme ? " code-block--dark" : "")}>
      <small className="code-block__label">Lang: {language}</small>
      {hasToggle && (
        <Button className="code-block__toggle" onClick={handleDark} size="sm" >
          {isDarkTheme ? "Light" : "Dark"}
        </Button>
      )}
      {language === "CSS" && <CSSCode colors={colors} />}
      {language === "HTML" && <HTMLCode colors={colors} />}
    </div>
  )
}

export default CodeBlock;