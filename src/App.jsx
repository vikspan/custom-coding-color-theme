import { useState, useRef } from 'react';
import CodeThemeEditor from './components/CodeThemeEditor/CodeThemeEditor';
import Header from './components/Header/Header';
import SavedThemes from './components/SavedThemes/SavedThemes';
import './styles/main.scss';

function App() {

  const defaultData = [
    { construct: "typeSel", title: "Type Selector", color: "#da00b6" },
    { construct: "classSel", title: "Class Selector", color: "#54d101" },
    { construct: "property", title: "Property", color: "#005CC5" },
    { construct: "value", title: "Value", color: "#ec3f79" }
  ];
  const languageOptions = ["CSS", "HTML"];

  const [language, setLanguage] = useState(languageOptions[0]);
  const [data, setData] = useState(defaultData);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [themes, setThemes] = useState([]);
  const editorRef = useRef(null);
  const lastThemeRef = useRef(null);

  const saveTheme = (data, isDarkTheme) => {
    const theme = {
      data: data,
      isDarkTheme: isDarkTheme
    };
    setThemes(prev => [...prev, theme]);
    setTimeout(() => {
      lastThemeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  const handleDelete = (i) => {
    setThemes(themes.filter((_, index) => index !== i));
  }

  const handleEdit = (savedThemeData, isDark) => {
    setData(savedThemeData);
    setIsDarkTheme(isDark);
    editorRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <CodeThemeEditor
        ref={editorRef}
        data={data}
        setData={setData}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        languageOptions={languageOptions}
        language={language}
        setLanguage={setLanguage}
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
