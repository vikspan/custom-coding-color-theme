import React from "react";
import Button from "../../common/Button/Button";
import CodeBlock from "../../CodeBlock/CodeBlock";
import "./SavedTheme.scss"

const SavedTheme = ({ index, data, isDarkTheme, handleDelete }) => {

  return (
    <div className="saved-theme">
      <div className="saved-theme__header">
        <h3 className="saved-theme__title">{index + 1}.</h3>
        <Button 
          className="saved-theme__delete-btn" 
          onClick={() => handleDelete(index)} 
          variant="danger" 
          size="sm"
        >X</Button>
      </div>
      <CodeBlock data={data} isDarkTheme={isDarkTheme} />
    </div>
  )
}

export default SavedTheme;