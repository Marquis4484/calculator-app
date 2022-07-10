import React from 'react';
import Content from './Components/Content'
import ThemeContext, {themes} from './context/context';

export default function App() {
  return (
    <>
      <ThemeContext.Provider value={themes.dark}>
        <Content/>
      </ThemeContext.Provider>
    </>
    
  )
}
