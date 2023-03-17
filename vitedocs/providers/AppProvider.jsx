import React, { useState } from 'react';
import AppContext from '../context/AppContext';

/**
 * Provide any application specific data
 */
const AppProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false);
  const [lineNumbers, setLineNumbers] = useState(false);

  const toggleColorScheme = () => {
    setColorScheme(prev => {
      const theme = prev === 'dark' ? 'light' : 'dark';
      document.getElementById('app-html').classList.toggle('spectrum--light');
      document.getElementById('app-html').classList.toggle('spectrum--darkest');
      return theme;
    });
  };

  const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const value = {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    navOpen,
    closeNav,
    toggleNav,
    lineNumbers,
    setLineNumbers
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
