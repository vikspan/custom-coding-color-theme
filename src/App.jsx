import { useState } from 'react';
import CodeThemeEditor from './components/CodeThemeEditor/CodeThemeEditor';
import Header from './components/Header/Header';
import SavedThemes from './components/SavedThemes/SavedThemes';
import './styles/main.scss';

function App() {

  const [themes, setThemes] = useState([]);

  const saveTheme = (data, isDarkTheme) => {
    const theme = {
      data: data,
      isDarkTheme: isDarkTheme
    };
    setThemes(prev => [...prev, theme]);
  }

  const handleDelete = (i) => {
    setThemes(themes.filter((_, index) => index !== i));
  }

  return (
    <>
      <Header />
      <CodeThemeEditor saveTheme={saveTheme} />
      <SavedThemes themes={themes} handleDelete={handleDelete} />
    </>
  );
}

export default App;
