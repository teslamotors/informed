import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

// Hooks
import useApp from '../hooks/useApp';

// Components
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Routes } from '../Routes/Routes';
import { Nav } from '../Nav/Nav';

const App = () => {
  const { colorScheme } = useApp();

  return (
    <Router basename="/informed">
      <Provider theme={defaultTheme} colorScheme={colorScheme}>
        <div className="site--app">
          <Header />
          <Nav />
          <main>
            <Routes />
          </main>
          {/* <Footer /> */}
        </div>
      </Provider>
    </Router>
  );
};

export default App;
