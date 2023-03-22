import { ActionButton, Flex, Switch } from '@adobe/react-spectrum';
import React from 'react';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';

import useMedia from '../hooks/useMedia';
import useApp from '../hooks/useApp';
import { NavLink } from '../Nav/NavLink';

export const Header = () => {
  // header contents modal open state when resize
  const { isDesktopUp } = useMedia();
  const {
    toggleNav,
    lineNumbers,
    setLineNumbers,
    comments,
    toggleComments
  } = useApp();

  // // For resizing header
  // window.addEventListener('resize', () => {
  //   setModalOpen(false);
  // });

  return (
    <header className="pageHeader">
      <Flex direction="row" alignItems="center" gap="size-100">
        {!isDesktopUp ? (
          <ActionButton aria-label="Open Menu" onClick={() => toggleNav()}>
            <ShowMenu />
          </ActionButton>
        ) : null}
        <NavLink href="/getting-started">Getting Started</NavLink>
        <NavLink href="/api-reference">Api Reference</NavLink>
        <li className={`spectrum-SideNav-item`}>
          <a href="/olddocs" className="spectrum-SideNav-itemLink">
            Old Docs
          </a>
        </li>
        {/* <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink> */}
        <div
          className="toggle"
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
          {/* <strong>Show Line Numbers</strong>
          <Switch
            aria-label="set-line-numbers"
            isSelected={lineNumbers}
            onChange={() => {
              setLineNumbers(prev => !prev);
            }}
          /> */}
          <span>Show Comments</span>
          <Switch
            aria-label="show-comments"
            isSelected={comments}
            onChange={toggleComments}
          />
        </div>
      </Flex>
    </header>
  );
};
