import React from 'react';
import ThemeComponent from './ThemeComponent';
import ToggleTheme from './ToggleTheme';
import ThemeProvider from './ThemeProvider';


function App() {
  return (
<ThemeProvider>
  <ToggleTheme/>
  <ThemeComponent/>
</ThemeProvider>
    
  );
}

export default App;
