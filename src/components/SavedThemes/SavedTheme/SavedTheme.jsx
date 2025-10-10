import React, { forwardRef, useState } from "react";
import Button from "../../common/Button/Button";
import CodeBlock from "../../CodeBlock/CodeBlock";
import "./SavedTheme.scss";
import SavedThemeRulesModal from "../SavedThemeRulesModal/SavedThemeRulesModal";

const SavedTheme = forwardRef(({ index, colorScheme, isDarkTheme, handleDelete, handleEdit, language }, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div ref={ref} className="saved-theme">
      <div className="saved-theme__header">
        <h3 className="saved-theme__title">{index + 1}.</h3>
        <div className="saved-theme__actions">
          <Button
            className="saved-theme__edit-btn"
            onClick={() => handleEdit(colorScheme, isDarkTheme, language)}
            variant="terciary"
            size="sm"
          >Edit</Button>
          <Button
            className="saved-theme__delete-btn"
            onClick={() => handleDelete(index)}
            variant="danger"
            size="sm"
          >X</Button>
        </div>
      </div>
      <CodeBlock colorScheme={colorScheme} isDarkTheme={isDarkTheme} language={language} />
      <Button
        className="saved-theme__theme-rules-btn"
        onClick={() => setIsOpen(true)}
        variant="primary"
      >Generate Rules for VS Code</Button>
      {isOpen && <SavedThemeRulesModal handleClose={handleClose} colorScheme={colorScheme} language={language} />}
    </div>
  )
});

export default SavedTheme;