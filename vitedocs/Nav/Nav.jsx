import React, { useRef } from 'react';
import { Flex, ActionButton } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';

// Hooks
import useApp from '../hooks/useApp';
import useOutsideAlerter from '../hooks/useOutsideAlerter';

import { NavLink } from './NavLink';

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
        <h1>My App</h1>
        <ActionButton
          aria-label="Switch Theme"
          onClick={() => toggleColorScheme()}>
          <Contrast />
        </ActionButton>
      </Flex>
      <ul className="spectrum-SideNav">
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/admin">Admin</NavLink>
        <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink>
      </ul>
    </nav>
  );
};
