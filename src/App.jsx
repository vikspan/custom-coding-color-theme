import { useState, useRef, useEffect } from 'react';
import CodeThemeEditor from './components/CodeThemeEditor/CodeThemeEditor';
import Header from './components/Header/Header';
import SavedThemes from './components/SavedThemes/SavedThemes';
import './styles/main.scss';

function App() {

  const defaultCSSColorScheme = [
    { construct: "typeSel", title: "Type Selector", color: "#da00b6" },
    { construct: "classSel", title: "Class Selector", color: "#54d101" },
    { construct: "property", title: "Property", color: "#005CC5" },
    { construct: "value", title: "Value", color: "#ec3f79" }
  ];
  const defaultHTMLColorScheme = [
    { construct: "htmlTag", title: "HTML Tag", color: "#615ff3" },
    { construct: "attName", title: "Name of Attribute", color: "#cbc114" },
    { construct: "attValue", title: "Value of Attribute", color: "#04c4d2" }
  ];
  const languageOptions = ["CSS", "HTML"];
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
