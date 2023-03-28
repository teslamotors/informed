import React, { useRef } from 'react';
import { Flex, ActionButton } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';

// Hooks
import useApp from '../hooks/useApp';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import { Routes, Route } from 'react-router-dom';

import { NavLink } from './NavLink';
import { GettingStartedNav } from './GettingStartedNav';
import { Car } from 'YourComponents';
import { ApiReferenceNav } from './ApiReferenceNav';
import useMedia from '../hooks/useMedia';
import { ExamplesNav } from './ExamplesNav';

export const Nav = () => {
  const { toggleColorScheme, navOpen, closeNav } = useApp();

  const navRef = useRef();

  useOutsideAlerter(() => closeNav(), navRef);

  const { isDesktopUp } = useMedia();

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
      {!isDesktopUp ? (
        <>
          <br />
          <NavLink href="/getting-started/intro">Getting Started</NavLink>
          <NavLink href="/api-reference/useField">Api Reference</NavLink>
          <NavLink href="/examples/array-field">Examples</NavLink>
          <li className={`spectrum-SideNav-item`}>
            <a href="/informed/olddocs" className="spectrum-SideNav-itemLink">
              Old Docs
            </a>
          </li>
          <hr />
        </>
      ) : null}
      <Routes>
        <Route path="/getting-started/:path" element={<GettingStartedNav />} />
        <Route path="/api-reference/:path" element={<ApiReferenceNav />} />
        <Route path="/examples/:path" element={<ExamplesNav />} />
      </Routes>
    </nav>
  );
};
