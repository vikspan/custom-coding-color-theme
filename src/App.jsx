import { useState, useRef, useEffect } from 'react';
import CodeThemeEditor from './components/CodeThemeEditor/CodeThemeEditor';
import Header from './components/Header/Header';
import SavedThemes from './components/SavedThemes/SavedThemes';
import './styles/main.scss';

function App() {

  const defaultCSSColorScheme = [
    { construct: "typeSel", title: "Type Selectors", color: "#da00b6" },
    { construct: "classSel", title: "Class Selectors", color: "#54d101" },
    { construct: "property", title: "Properties", color: "#005CC5" },
    { construct: "value", title: "Values", color: "#ec3f79" }
  ];
  const defaultHTMLColorScheme = [
    { construct: "htmlTag", title: "HTML Tags", color: "#da00b6" },
    { construct: "attName", title: "Attribute Names", color: "#2079df" },
    { construct: "attValue", title: "Attribute Values", color: "#04c4d2" }
  ];
  const defaultJSColorScheme = [
    { construct: "keyword", title: "Keywords", color: "#df62a5" },
    { construct: "variable", title: "Variables", color: "#46c8e2" },
    { construct: "func", title: "Functions", color: "#9987d9" },
    { construct: "number", title: "Numbers", color: "#e17c51" },
    { construct: "string", title: "Strings", color: "#a6c355" }
  ];

  const languageOptions = ["CSS", "HTML", "JS"];
  const [language, setLanguage] = useState("CSS");
  const [colorScheme, setColorScheme] = useState(defaultCSSColorScheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [themes, setThemes] = useState(() => {
    const saved = localStorage.getItem("savedThemes");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved themes:", e);
      }
    }
    return [];
  });

  const editorRef = useRef(null);
  const lastThemeRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("savedThemes", JSON.stringify(themes));
  }, [themes]);

  const handleLangSelect = (lang) => {
    if (lang === "CSS") {
      setColorScheme(defaultCSSColorScheme);
    } else if (lang === "HTML") {
      setColorScheme(defaultHTMLColorScheme);
    } else if (lang === "JS") {
      setColorScheme(defaultJSColorScheme);
    }
  }

  const saveTheme = (colorScheme, isDarkTheme, lang) => {
    const theme = {
      colorScheme: colorScheme,
      isDarkTheme: isDarkTheme,
      lang: lang,
    };
    setThemes(prev => [...prev, theme]);
    setTimeout(() => {
      lastThemeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  const handleDelete = (i) => {
    setThemes(themes.filter((_, index) => index !== i));
  }

  const handleEdit = (savedThemeColorScheme, isDark, lang) => {
    setLanguage(lang);
    setColorScheme(savedThemeColorScheme);
    setIsDarkTheme(isDark);
    editorRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <CodeThemeEditor
        ref={editorRef}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        languageOptions={languageOptions}
        language={language}
        setLanguage={setLanguage}
        handleLangSelect={handleLangSelect}
        saveTheme={saveTheme}
      />
      <SavedThemes
        lastThemeRef={lastThemeRef}
        themes={themes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
