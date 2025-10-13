import React, { forwardRef } from "react";
import "./CodeThemeEditor.scss";
import CodeBlock from "../CodeBlock/CodeBlock";
import CodeColorRandomizer from "./CodeColorRandomizer/CodeColorRandomizer";
import CodeColorCustomizer from "./CodeColorCustomizer/CodeColorCustomizer";
import LanguageSelect from "./LanguageSelect/LanguageSelect";

const CodeThemeEditor = forwardRef(
  ({ saveTheme, colorScheme, setColorScheme,
    isDarkTheme, setIsDarkTheme,
    languageOptions, language, setLanguage, handleLangSelect }, ref) => {

    const handleColor = (construct, color) => {
      setColorScheme(prev =>
        prev.map(item => item.construct === construct ? { ...item, color: color } : item)
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
      const clonedColorScheme = structuredClone(colorScheme); // deep copy
      saveTheme(clonedColorScheme, isDarkTheme, language);
    }

    return (
      <section className="theme-editor" ref={ref}>
        <h2 className="theme-editor__title">Create a New Color Theme</h2>
        <LanguageSelect 
          languageOptions={languageOptions}  
          language={language} 
          setLanguage={setLanguage}
          handleLangSelect={handleLangSelect}
        />
        <div className="theme-editor__workspace">
          <CodeColorCustomizer colorScheme={colorScheme} handleColor={handleColor} />
          <CodeBlock 
            colorScheme={colorScheme} 
            hasToggle="true" 
            isDarkTheme={isDarkTheme} 
            handleDark={handleDark} 
            language={language} 
          />
          <CodeColorRandomizer colorScheme={colorScheme} handleRandom={handleRandom} handleSave={handleSave} />
        </div>
      </section>
    )
  });

export default CodeThemeEditor;