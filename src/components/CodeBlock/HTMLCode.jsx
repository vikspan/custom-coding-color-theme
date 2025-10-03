import React from "react";

const HTMLCode = ({ colors }) => {

  const { htmlTag, attName, attValue } = colors;

  return (
    <code className="code-block__code">
      <span style={{ color: htmlTag }}>&lt;nav</span><span style={{ color: attName }}> class=</span><span style={{ color: attValue }}>"nav"</span><span style={{ color: htmlTag }}>&gt;</span><br />
      &nbsp; <span style={{ color: htmlTag }}>&lt;section</span><span style={{ color: attName }}> class=</span><span style={{ color: attValue }}>"nav__col"</span><span style={{ color: htmlTag }}>&gt;</span><br />
      &nbsp; &nbsp; <span style={{ color: htmlTag }}>&lt;a</span><span style={{ color: attName }}> href=</span><span style={{ color: attValue }}>"#"</span><span style={{ color: htmlTag }}>&gt;</span>Home<span style={{ color: htmlTag }}>&lt;/a&gt;</span><br />
      &nbsp; &nbsp; <span style={{ color: htmlTag }}>&lt;a</span><span style={{ color: attName }}> href=</span><span style={{ color: attValue }}>"#"</span><span style={{ color: htmlTag }}>&gt;</span>About Us<span style={{ color: htmlTag }}>&lt;/a&gt;</span><br />
      &nbsp; &nbsp; <span style={{ color: htmlTag }}>&lt;a</span><span style={{ color: attName }}> href=</span><span style={{ color: attValue }}>"#"</span><span style={{ color: htmlTag }}>&gt;</span>Gallery<span style={{ color: htmlTag }}>&lt;/a&gt;</span><br />
      &nbsp; <span style={{ color: htmlTag }}>&lt;section&gt;</span><br /><br />
      &nbsp; <span style={{ color: htmlTag }}>&lt;section</span><span style={{ color: attName }}> class=</span><span style={{ color: attValue }}>"nav__col"</span><span style={{ color: htmlTag }}>&gt;</span><br />
      &nbsp; &nbsp; <span style={{ color: htmlTag }}>&lt;a</span><span style={{ color: attName }}> href=</span><span style={{ color: attValue }}>"#"</span><span style={{ color: htmlTag }}>&gt;</span>Prices<span style={{ color: htmlTag }}>&lt;/a&gt;</span><br />
      &nbsp; &nbsp; <span style={{ color: htmlTag }}>&lt;a</span><span style={{ color: attName }}> href=</span><span style={{ color: attValue }}>"#"</span><span style={{ color: htmlTag }}>&gt;</span>Contact<span style={{ color: htmlTag }}>&lt;/a&gt;</span><br />
      &nbsp; <span style={{ color: htmlTag }}>&lt;section&gt;</span><br />
      <span style={{ color: htmlTag }}>&lt;/nav&gt;</span>
    </code>
  )
}

export default HTMLCode;