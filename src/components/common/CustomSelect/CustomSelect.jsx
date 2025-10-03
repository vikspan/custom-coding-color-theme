import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";

const CustomSelect = ({ options, selected, setSelected, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }

    if (isOpen) {
      const currentIndex = options.indexOf(selected);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected(options[(currentIndex + 1) % options.length]);
        onChange?.(options[(currentIndex + 1) % options.length]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected(options[(currentIndex - 1 + options.length) % options.length]);
        onChange?.(options[(currentIndex - 1 + options.length) % options.length]);
      } else if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === "Tab") {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="custom-select" ref={selectRef} >
      <button
        className="custom-select__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selected}
        <span className="custom-select__arrow">▼</span>
      </button>

      {isOpen && (
        <ul className="custom-select__menu" role="listbox" >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === selected}
              className="custom-select__item"
              onClick={() => { setSelected(opt); setIsOpen(false); onChange?.(opt); }}
            >
              {opt} {opt === selected && (
                <span className="custom-select__check">✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
