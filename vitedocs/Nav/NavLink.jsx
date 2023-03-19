import { useLocation, useNavigate } from 'react-router-dom';

export const NavLink = ({ children, href, exact = false, ...rest }) => {
  const navigate = useNavigate();

  const onClick = e => {
    e.preventDefault();
    navigate(href);
  };

  let location = useLocation();

  const isSelected = exact
    ? location.pathname === href
    : location.pathname.includes(href);

  return (
    <li className={`spectrum-SideNav-item ${isSelected ? 'is-selected' : ''}`}>
      <a {...rest} onClick={onClick} className="spectrum-SideNav-itemLink">
        {children}
      </a>
    </li>
  );
};
