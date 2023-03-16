import { ActionButton, Flex } from '@adobe/react-spectrum';
import React from 'react';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';

import useMedia from '../hooks/useMedia';
import useApp from '../hooks/useApp';
import { NavLink } from '../Nav/NavLink';

export const Header = () => {
  // header contents modal open state when resize
  const { isDesktopUp } = useMedia();
  const { toggleNav } = useApp();

  // For resizing header
  window.addEventListener('resize', () => {
    setModalOpen(false);
  });

  return (
    <header className="pageHeader">
      <Flex direction="row" alignItems="center" gap="size-100">
        {!isDesktopUp ? (
          <ActionButton aria-label="Open Menu" onClick={() => toggleNav()}>
            <ShowMenu />
          </ActionButton>
        ) : null}
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/admin">Admin</NavLink>
        <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink>
      </Flex>
    </header>
  );
};
