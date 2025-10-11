import React from "react";
import "./CodeColorCustomizer.scss";
import ColorPicker from "./ColorPicker/ColorPicker";

const CodeColorCustomizer = ({ handleColor, colorScheme }) => {

  return (
    <div className="color-customizer">
      <h3 className="color-customizer__title">Select Custom Colors</h3>
      <div className="color-customizer__list">
        {
          colorScheme.map((item) => (
            <ColorPicker handleColor={handleColor} item={item} key={item.construct} />
          ))
        }
      </div>
    </div>
  )
}

export default CodeColorCustomizer;


