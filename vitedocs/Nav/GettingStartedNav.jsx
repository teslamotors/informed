import { NavLink } from './NavLink';

export const GettingStartedNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <NavLink href="/getting-started/intro">Intro</NavLink>
      <NavLink href="/getting-started/setup">Setup</NavLink>
      <NavLink href="/getting-started/hooks">Hooks</NavLink>
    </ul>
  );
};
