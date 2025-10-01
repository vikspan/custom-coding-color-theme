import React from "react";
import "./LanguageSelect.scss";
import CustomSelect from "../../common/CustomSelect/CustomSelect";

const LanguageSelect = ({ languageOptions, language, setLanguage }) => {

  return (
    <div className="language-select">
      <label className="language-select__label">Select a Language:</label>
      <CustomSelect options={languageOptions} selected={language} setSelected={setLanguage} />
    </div>
  );
}

export default LanguageSelect;
