import React from "react";
import "./SavedThemes.scss";
import SavedTheme from "./SavedTheme/SavedTheme";

const SavedThemes = ({ themes, handleDelete, handleEdit, lastThemeRef }) => {

  return (
    <section className="saved-themes">
      {(themes.length !== 0) && (
        <h2 className="saved-themes__title">Your Saved Themes</h2>
      )}
      <div className="saved-themes__list">
        {themes.map((theme, i) => {
          const isLast = i === themes.length - 1;
          return (
            <SavedTheme
              key={i}
              ref={isLast ? lastThemeRef : null}
              colorScheme={theme.colorScheme}
              isDarkTheme={theme.isDarkTheme}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              index={i}
              language={theme.lang}
            />
          );
        })}
      </div>
    </section>
  )
}

export default SavedThemes;