// In your App.js or parent component
import { useState } from 'react';
import TopNavBar from './components/TopNavBar';
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.className = isDarkTheme ? 'light-theme' : 'dark-theme';
  };

  return (
    <div>
      <TopNavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </div>
  );
}
export default App;