import React, { forwardRef } from "react";
import Button from "../../common/Button/Button";
import CodeBlock from "../../CodeBlock/CodeBlock";
import "./SavedTheme.scss";

const SavedTheme = forwardRef(({ index, data, isDarkTheme, handleDelete, handleEdit, language }, ref) => {

  return (
    <div ref={ref} className="saved-theme">
      <div className="saved-theme__header">
        <h3 className="saved-theme__title">{index + 1}.</h3>
        <div className="saved-theme__actions">
          <Button
            className="saved-theme__edit-btn"
            onClick={() => handleEdit(data, isDarkTheme, language)}
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
      <CodeBlock data={data} isDarkTheme={isDarkTheme} language={language} />
    </div>
  )
});

export default SavedTheme;