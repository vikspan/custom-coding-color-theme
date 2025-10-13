import React from "react";

const JSCode = ({ colors }) => {

  const { keyword, variable, func, number, string } = colors;

  return (
    <code className="code-block__code">
      <span style={{ color: keyword }}>const</span>{" "}
      <span style={{ color: variable }}>user</span> = &#123; <br />
      &nbsp; name:{" "}<span style={{ color: string }}>"Alex"</span>, <br />
      &nbsp; age:{" "}<span style={{ color: number }}>28</span>, <br />
      &nbsp; role:{" "}<span style={{ color: string }}>"admin"</span> <br />
      &#125;; <br /><br />
      <span style={{ color: keyword }}>function</span>{" "}
      <span style={{ color: func }}>greet</span>(
      <span style={{ color: variable }}>user</span>) &#123; <br />
      &nbsp; <span style={{ color: keyword }}>return</span>{" "}
      <span style={{ color: string }}>`Hi $&#123;
      <span style={{ color: variable }}>user</span>.
      <span style={{ color: variable }}>name</span>&#125;!`</span>; <br />
      &#125; <br /><br />
      <span style={{ color: func }}>console.log</span>(
      <span style={{ color: variable }}>user</span>.
      <span style={{ color: variable }}>name</span>); <br />
      <span style={{ color: func }}>greet</span>(
      <span style={{ color: variable }}>user</span>);
    </code>
  );
};

export default JSCode;
