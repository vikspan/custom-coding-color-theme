import React, { forwardRef } from "react";
import Button from "../../common/Button/Button";
import CodeBlock from "../../CodeBlock/CodeBlock";
import "./SavedTheme.scss";

const SavedTheme = ({ index, data, isDarkTheme, handleDelete, handleEdit }) => {

  return (
    <div className="saved-theme">
      <div className="saved-theme__header">
        <h3 className="saved-theme__title">{index + 1}.</h3>
        <div className="saved-theme__actions">
          <Button
            className="saved-theme__edit-btn"
            onClick={() => handleEdit(data, isDarkTheme)}
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
      <CodeBlock data={data} isDarkTheme={isDarkTheme} />
    </div>
  )
}

export default SavedTheme;