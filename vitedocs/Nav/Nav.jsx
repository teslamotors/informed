import React, { useRef } from 'react';
import { Flex, ActionButton } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';

// Hooks
import useApp from '../hooks/useApp';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import { Routes, Route } from 'react-router-dom';

import { NavLink } from './NavLink';
import { GettingStartedNav } from './GettingStartedNav';
import { Car } from './Car';

export const Nav = () => {
  const { toggleColorScheme, navOpen, closeNav } = useApp();

  const navRef = useRef();

  useOutsideAlerter(() => closeNav(), navRef);

  return (
    <nav
      className={navOpen ? 'sidenav sidenav-visible' : 'sidenav'}
      ref={navRef}>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="size-100">
        {/* <img
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
          src={'/car-on-informed.png'}
          width="200px"
        /> */}
        <Car />
        <ActionButton
          aria-label="Switch Theme"
          onClick={() => toggleColorScheme()}>
          <Contrast />
        </ActionButton>
      </Flex>
      <Routes>
        <Route path="/getting-started/:path" element={<GettingStartedNav />} />
      </Routes>
    </nav>
  );
};
