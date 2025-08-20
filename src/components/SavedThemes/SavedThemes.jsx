import React from "react";
import "./SavedThemes.scss";
import SavedTheme from "./SavedTheme/SavedTheme";

const SavedThemes = ({ themes, handleDelete }) => {

  return (
    <section className="saved-themes">
      {(themes.length !== 0) && (
        <h2 className="saved-themes__title">Your Saved Themes</h2>
      )}
      <div className="saved-themes__list">
        {
          themes.map((theme, i) => (
            <SavedTheme
              key={i}
              data={theme.data}
              isDarkTheme={theme.isDarkTheme}
              handleDelete={handleDelete}
              index={i}
            />
          ))
        }
      </div>
    </section>
  )
}

export default SavedThemes;