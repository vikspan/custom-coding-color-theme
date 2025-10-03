import React from "react";

const CSSCode = ({ colors }) => {

  const { typeSel, classSel, property, value } = colors;

  return (
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
  )
}

export default CSSCode;