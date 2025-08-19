import React, { useState } from "react";
import "./CodeThemeEditor.scss";
import CodeBlock from "../CodeBlock/CodeBlock";
import CodeColorRandomizer from "./CodeColorRandomizer/CodeColorRandomizer";
import CodeColorCustomizer from "./CodeColorCustomizer/CodeColorCustomizer";

const CodeThemeEditor = ({ saveTheme }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [data, setData] = useState([
    { construct: "typeSel", title: "Type Selector", color: "#da00b6" },
    { construct: "classSel", title: "Class Selector", color: "#54d101" },
    { construct: "property", title: "Property", color: "#005CC5" },
    { construct: "value", title: "Value", color: "#ec3f79" }
  ]);

  const handleColor = (construct, color) => {
    setData(prevData =>
      prevData.map(item => item.construct === construct ? { ...item, color: color } : item)
    );
  }

  const handleRandom = (construct) => {
    const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    handleColor(construct, color);
  }

  const handleDark = () => {
    setIsDarkTheme(prev => !prev);
  }

  const handleSave = () => {
    const clonedData = structuredClone(data); // deep copy
    saveTheme(clonedData, isDarkTheme);
  }

  return (
    <section className="theme-editor">
      <h2 className="theme-editor__title">Create a New Color Theme</h2>
      <div className="theme-editor__workspace">
        <CodeColorCustomizer data={data} handleColor={handleColor} />
        <CodeBlock data={data} hasToggle="true" isDarkTheme={isDarkTheme} handleDark={handleDark} />
        <CodeColorRandomizer data={data} handleRandom={handleRandom} handleSave={handleSave} />
      </div>
    </section>
  )
}

export default CodeThemeEditor;