import { NavLink } from './NavLink';

export const ExamplesNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <NavLink href="/examples/array-field">Array Field</NavLink>
      <NavLink href="/examples/async-validation">Async Validation</NavLink>
      <NavLink href="/examples/formatting-number">Number Formatter</NavLink>
      <NavLink href="/examples/paired-validation">Paired Validation</NavLink>
      <NavLink href="/examples/table-inline-editing">
        Table Inline Editing
      </NavLink>
    </ul>
  );
};
