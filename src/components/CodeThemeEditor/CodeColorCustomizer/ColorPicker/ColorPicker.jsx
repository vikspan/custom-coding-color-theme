import React from "react";
import "./ColorPicker.scss";

export default function ColorPicker({ handleColor, item }) {

  return (
    <div className="color-picker">
      <label className="color-picker__label" htmlFor={`color-${item.construct}`}>
        {item.title}:
      </label>
      <span className="color-picker__value">
        {item.color}
      </span>
      <label
        className="color-picker__swatch"
        htmlFor={`color-${item.construct}`}
        style={{ backgroundColor: item.color }}
      />
      <input
        className="color-picker__input"
        id={`color-${item.construct}`}
        type="color"
        value={item.color}
        onChange={(e) => handleColor(item.construct, e.target.value)}
      />
    </div>
  );
}
