import { useLocation, useNavigate } from 'react-router-dom';

export const NavLink = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = e => {
    e.preventDefault();
    navigate(href);
  };

  let location = useLocation();
  const isSelected = href === location.pathname;

  return (
    <li className={`spectrum-SideNav-item ${isSelected ? 'is-selected' : ''}`}>
      <a {...rest} onClick={onClick} className="spectrum-SideNav-itemLink">
        {children}
      </a>
    </li>
  );
};
