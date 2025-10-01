import React, { forwardRef } from "react";
import "./CodeThemeEditor.scss";
import CodeBlock from "../CodeBlock/CodeBlock";
import CodeColorRandomizer from "./CodeColorRandomizer/CodeColorRandomizer";
import CodeColorCustomizer from "./CodeColorCustomizer/CodeColorCustomizer";
import LanguageSelect from "./LanguageSelect/LanguageSelect";

const CodeThemeEditor = forwardRef(
  ({ saveTheme, data, setData,
    isDarkTheme, setIsDarkTheme,
    languageOptions, language, setLanguage }, ref) => {

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
      <section className="theme-editor" ref={ref}>
        <h2 className="theme-editor__title">Create a New Color Theme</h2>
        <LanguageSelect languageOptions={languageOptions} language={language} setLanguage={setLanguage} />
        <div className="theme-editor__workspace">
          <CodeColorCustomizer data={data} handleColor={handleColor} />
          <CodeBlock data={data} hasToggle="true" isDarkTheme={isDarkTheme} handleDark={handleDark} />
          <CodeColorRandomizer data={data} handleRandom={handleRandom} handleSave={handleSave} />
        </div>
      </section>
    )
  });

export default CodeThemeEditor;