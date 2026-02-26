import { NavLink } from './NavLink';

export const GettingStartedNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Basics</h3>
      <NavLink href="/getting-started/intro">Intro</NavLink>
      <NavLink href="/getting-started/setup">Setup</NavLink>
      <NavLink href="/getting-started/path-syntax">Path Syntax</NavLink>
      <h3>Control</h3>
      <NavLink href="/getting-started/hooks">Hooks</NavLink>
      <NavLink href="/getting-started/formState">Form State</NavLink>
      <NavLink href="/getting-started/formApi">Form Api</NavLink>
      <NavLink href="/getting-started/fieldState">Field State</NavLink>
      <NavLink href="/getting-started/fieldApi">Field Api</NavLink>
      <h3>Features</h3>
      <NavLink href="/getting-started/array-field">Array Field</NavLink>
      <NavLink href="/getting-started/relevant">Relevant</NavLink>
      <NavLink href="/getting-started/formatting">Formatting</NavLink>
      <NavLink href="/getting-started/validation">Validation</NavLink>
      <NavLink href="/getting-started/schema">Schema Rendering</NavLink>
      <NavLink href="/getting-started/multistep">Multistep</NavLink>
      <NavLink href="/getting-started/metadata">Meta Data</NavLink>
      <h3>Creating Inputs ( Native )</h3>
      <NavLink href="/getting-started/form">Form</NavLink>
      <NavLink href="/getting-started/text-input">Text Input</NavLink>
      <NavLink href="/getting-started/number-input">Number Input</NavLink>
      <NavLink href="/getting-started/text-area">Text Area</NavLink>
      <NavLink href="/getting-started/select">Select</NavLink>
      <NavLink href="/getting-started/checkbox">Checkbox</NavLink>
      <NavLink href="/getting-started/radio">Radio Group</NavLink>
      <NavLink href="/getting-started/slider">Slider</NavLink>
      <h3>Creating Inputs ( Adobe )</h3>
      <NavLink href="/getting-started/adobe-form">Form</NavLink>
      <NavLink href="/getting-started/adobe-text-input">Text Input</NavLink>
      <NavLink href="/getting-started/adobe-number-input">Number Input</NavLink>
      <NavLink href="/getting-started/adobe-text-area">Text Area</NavLink>
      <NavLink href="/getting-started/adobe-select">Select</NavLink>
      <NavLink href="/getting-started/adobe-checkbox">Checkbox</NavLink>
      <NavLink href="/getting-started/adobe-checkbox-group">
        Checkbox Group
      </NavLink>
      <NavLink href="/getting-started/adobe-radio-group">Radio Group</NavLink>
      <NavLink href="/getting-started/adobe-slider">Slider</NavLink>
      <NavLink href="/getting-started/adobe-switch">Switch</NavLink>
      <NavLink href="/getting-started/adobe-combo-box">Combo Box</NavLink>
      <h3>Developers</h3>
      <NavLink href="/getting-started/readme">Readme</NavLink>
      <NavLink href="/getting-started/changelog">Changelog</NavLink>
    </ul>
  );
};
