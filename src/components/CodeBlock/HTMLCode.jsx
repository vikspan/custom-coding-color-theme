import React from "react";

const HTMLCode = ({ colors }) => {

  const { htmlTag, attName, attValue } = colors;

  return (
    <code className="code-block__code">
      &lt;<span style={{ color: htmlTag }}>nav</span><span style={{ color: attName }}> class</span>="<span style={{ color: attValue }}>nav</span>"&gt;<br />
      &nbsp; &lt;<span style={{ color: htmlTag }}>section</span><span style={{ color: attName }}> class</span>="<span style={{ color: attValue }}>nav__col</span>"&gt;<br />
      &nbsp; &nbsp; &lt;<span style={{ color: htmlTag }}>a</span><span style={{ color: attName }}> href</span>="<span style={{ color: attValue }}>#</span>"&gt;Home&lt;/<span style={{ color: htmlTag }}>a</span>&gt;<br />
      &nbsp; &nbsp; &lt;<span style={{ color: htmlTag }}>a</span><span style={{ color: attName }}> href</span>="<span style={{ color: attValue }}>#</span>"&gt;About Us&lt;/<span style={{ color: htmlTag }}>a</span>&gt;<br />
      &nbsp; &nbsp; &lt;<span style={{ color: htmlTag }}>a</span><span style={{ color: attName }}> href</span>="<span style={{ color: attValue }}>#</span>"&gt;Gallery&lt;/<span style={{ color: htmlTag }}>a</span>&gt;<br />
      &nbsp; &lt;/<span style={{ color: htmlTag }}>section</span>&gt;<br /><br />
      &nbsp; &lt;<span style={{ color: htmlTag }}>section</span><span style={{ color: attName }}> class</span>="<span style={{ color: attValue }}>nav__col</span>"&gt;<br />
      &nbsp; &nbsp; &lt;<span style={{ color: htmlTag }}>a</span><span style={{ color: attName }}> href</span>="<span style={{ color: attValue }}>#</span>"&gt;Prices&lt;/<span style={{ color: htmlTag }}>a</span>&gt;<br />
      &nbsp; &nbsp; &lt;<span style={{ color: htmlTag }}>a</span><span style={{ color: attName }}> href</span>="<span style={{ color: attValue }}>#</span>"&gt;Contact&lt;/<span style={{ color: htmlTag }}>a</span>&gt;<br />
      &nbsp; &lt;/<span style={{ color: htmlTag }}>section</span>&gt;<br />
      &lt;/<span style={{ color: htmlTag }}>nav</span>&gt;
    </code>
  )
}

export default HTMLCode;