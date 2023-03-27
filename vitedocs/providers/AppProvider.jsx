import React, { useState } from 'react';
import AppContext from '../context/AppContext';

/**
 * Provide any application specific data
 */
const AppProvider = ({ children }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const commentsDisabled = searchParams.get('comments') === 'false';

  const [colorScheme, setColorScheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false);
  const [lineNumbers, setLineNumbers] = useState(false);
  const [comments, setComments] = useState(!commentsDisabled);

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

  const toggleComments = () => {
    setComments(prev => !prev);
  };

  const value = {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    navOpen,
    closeNav,
    toggleNav,
    lineNumbers,
    setLineNumbers,
    comments,
    toggleComments
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
