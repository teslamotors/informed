import { NavLink } from './NavLink';

export const ExamplesNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Arrays</h3>
      <NavLink href="/examples/array-field">Array Field</NavLink>
      <h3>Validation</h3>
      <NavLink href="/examples/async-validation">Async Validation</NavLink>
      <NavLink href="/examples/paired-validation">Paired Validation</NavLink>
      <NavLink href="/examples/validation-control">Validation Control</NavLink>

      <h3>Formatting</h3>
      <NavLink href="/examples/formatting-number">Number Formatter</NavLink>
      <h3>Relevant</h3>
      <NavLink href="/examples/relevant-component">Relevant Component</NavLink>
      <NavLink href="/examples/relevant-scoped">Scoped Relevance</NavLink>
      <NavLink href="/examples/relevant-arrays">Relevance in Arrays</NavLink>
      <h3>Multistep</h3>
      <NavLink href="/examples/multistep-intro">Basic Multistep</NavLink>
      <NavLink href="/examples/multistep-dynamic">Dynamic Multistep</NavLink>
      <h3>Cool</h3>
      <NavLink href="/examples/table-inline-editing">
        Table Inline Editing
      </NavLink>
    </ul>
  );
};
