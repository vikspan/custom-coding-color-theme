import React, { useEffect, useRef } from "react";
import "./SavedThemeRulesModal.scss";
import { FocusTrap } from "focus-trap-react";
import Button from "../../common/Button/Button";
import usageExample from "../../../assets/usage-example.png";
import RulesBlockWithCopy from "./RulesBlockWithCopy/RulesBlockWithCopy";

const ThemeRulesModal = ({ handleClose, colorScheme, language }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [handleClose]);

  return (
    <div className="theme-rules-modal__overlay">
      <FocusTrap>
        <div className="theme-rules-modal" ref={modalRef}>
          <Button
            className="theme-rules-modal__close-btn"
            onClick={handleClose}
            variant="danger"
            size="sm"
          >X</Button>

          <h2 className="theme-rules-modal__title">
            Color Theme Customization for VS Code
          </h2>

          <div className="theme-rules-modal__body">
            <div className="theme-rules-modal__instructions">
              <ol className="theme-rules-modal__list">
                <li>Open the command palette in VS Code <br />
                  (Ctrl + Shift + P for Windows/Linux, Cmd + Shift + P for Mac).</li>
                <li>Search for and open "Preferences: Open User Settings (JSON)".</li>
                <li>Copy the code below and paste it at the bottom of the file as shown in the picture (don't forget to add a comma).</li>
                <li>That's it!</li>
              </ol>

              <RulesBlockWithCopy colorScheme={colorScheme} language={language} />
            </div>

            <div className="theme-rules-modal__preview">
              <img src={usageExample} alt="Example of where to paste the code" />
            </div>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default ThemeRulesModal;
