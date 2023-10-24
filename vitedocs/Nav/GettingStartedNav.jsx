import { NavLink } from './NavLink';

export const GettingStartedNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <NavLink href="/getting-started/intro">Intro</NavLink>
      <NavLink href="/getting-started/setup">Setup</NavLink>
      <NavLink href="/getting-started/hooks">Hooks</NavLink>
      <NavLink href="/getting-started/formState">Form State</NavLink>
      <NavLink href="/getting-started/formApi">Form Api</NavLink>
      <NavLink href="/getting-started/fieldState">Field State</NavLink>
      <NavLink href="/getting-started/fieldApi">Field Api</NavLink>
      <NavLink href="/getting-started/path-syntax">Path Syntax</NavLink>
      <NavLink href="/getting-started/array-field">Array Field</NavLink>
      <NavLink href="/getting-started/relevant">Relevant</NavLink>
      <NavLink href="/getting-started/formatting">Formatting</NavLink>
      <NavLink href="/getting-started/validation">Validation</NavLink>
      <NavLink href="/getting-started/schema">Schema Rendering</NavLink>
      <NavLink href="/getting-started/multistep">Multistep</NavLink>
      <NavLink href="/getting-started/metadata">Meta Data</NavLink>
      <NavLink href="/getting-started/readme">Readme</NavLink>
      <NavLink href="/getting-started/changelog">Changelog</NavLink>
    </ul>
  );
};
