import { Link } from '@adobe/react-spectrum';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(href);
  };

  return (
    <Link onPress={onClick} {...rest}>
      {children}
    </Link>
  );
};

export const Footer = () => (
  <footer>
    <span>App &copy; {new Date().getFullYear()}</span>
    <span>/</span>
    <NavLink href="/">Home</NavLink>
    <span>/</span>
    <NavLink href="/asdf">Stock 404 Page</NavLink>
  </footer>
);
