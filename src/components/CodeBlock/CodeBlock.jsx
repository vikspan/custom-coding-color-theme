import React, { useState } from "react";
import "./CodeBlock.scss";
import Button from "../common/Button/Button";

const CodeBlock = ({ colors, hasButton }) => {
  const { typeSel, classSel, property, value } = colors;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleButton = (
    <Button
      className="code-block__btn"
      onClick={() => setIsDarkTheme(prev => !prev)}
      variant="secondary"
      size="sm"
    >
      {isDarkTheme ? "Light" : "Dark"}
    </Button>
  );

  return (
    <div className={"code-block" + (isDarkTheme ? " code-block--dark" : "")}>
      <small className="code-block__label">Lang: CSS</small>
      {hasButton && toggleButton}
      <code className="code-block__code">
        <span style={{ color: typeSel }}>header</span> &#123; <br />
        &nbsp; <span style={{ color: property }}>display</span>: <span style={{ color: value }}>flex</span>; <br />
        &nbsp; <span style={{ color: property }}>justify-content</span>: <span style={{ color: value }}>center</span>; <br />
        &nbsp; <span style={{ color: property }}>align-items</span>: <span style={{ color: value }}>center</span>; <br />
        &#125; <br /><br />
        <span style={{ color: classSel }}>.logo</span> &#123; <br />
        &nbsp; <span style={{ color: property }}>font-size</span>: <span style={{ color: value }}>32px</span>; <br />
        &nbsp; <span style={{ color: property }}>font-weight</span>: <span style={{ color: value }}>300</span>; <br />
        &nbsp; <span style={{ color: property }}>text-transform</span>: <span style={{ color: value }}>uppercase</span>; <br />
        &nbsp; <span style={{ color: property }}>padding-left</span>: <span style={{ color: value }}>10px</span>; <br />
        &#125;
      </code>
    </div>
  )
}

export default CodeBlock;