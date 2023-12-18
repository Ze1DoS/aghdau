import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Menu from './Elements/Menu';
import './App.css';
import Main from "./Elements/Main";
import About from './Elements/About'
import WhatIs from "./Elements/WhatIs";
import Chirita from "./Elements/Chirita";
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from './Components/Themes';



function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {

        theme === 'light' ? setTheme('dark') : setTheme('light')

    }
  return (
      <BrowserRouter>
          <Routes>
              <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <button onClick={themeToggler}>Switch Theme</button>
              <Route path='/' element={<Menu />}/>
              <Route path='/:action' element={<Menu />}/>
              <Route path='/main' element={<Main />}/>
              <Route path='/whatis' element={<WhatIs />}/>
              <Route path={'/pies'} element={<Chirita />}/>
              <Route path='/about' element={<About />}/>
              </ThemeProvider>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
