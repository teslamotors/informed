import { NavLink } from './NavLink';

export const ExamplesNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Arrays</h3>
      <NavLink href="/examples/array-field">Array Field</NavLink>
      <NavLink href="/examples/array-field-unique">Unique Validation</NavLink>
      <h3>Validation</h3>
      <NavLink href="/examples/async-validation">Async Validation</NavLink>
      <NavLink href="/examples/paired-validation">Paired Validation</NavLink>
      <NavLink href="/examples/validation-control">Validation Control</NavLink>
      <NavLink href="/examples/updating-validation">
        Updating Validation
      </NavLink>
      <h3>Dynamic</h3>
      <NavLink href="/examples/changing-options">Chaning Options</NavLink>
      <NavLink href="/examples/dependent-fields">Dependent Fields</NavLink>
      <NavLink href="/examples/two-way">Two Way Dependence</NavLink>
      <h3>Formatting</h3>
      <NavLink href="/examples/formatting-formatter">Formatter</NavLink>
      <NavLink href="/examples/formatting-number">Number Formatter</NavLink>
      <NavLink href="/examples/formatting-clean">Clean</NavLink>
      <NavLink href="/examples/formatting-mask">Mask</NavLink>
      <NavLink href="/examples/formatting-parse">Parse</NavLink>
      <h3>Relevant</h3>
      <NavLink href="/examples/relevant-component">Relevant Component</NavLink>
      <NavLink href="/examples/relevant-scoped">Scoped Relevance</NavLink>
      <NavLink href="/examples/relevant-arrays">Relevance in Arrays</NavLink>
      <NavLink href="/examples/relevant-schema">Schema Relevance</NavLink>

      <h3>Schema</h3>
      <NavLink href="/examples/schema-intro">Intro</NavLink>
      <NavLink href="/examples/schema-conditional">Conditional Schema</NavLink>
      <NavLink href="/examples/schema-nested">Nested Schema</NavLink>
      <NavLink href="/examples/schema-conditional-option">
        Conditional Option Schema
      </NavLink>
      <NavLink href="/examples/schema-formatted">Formatted Schema</NavLink>
      <NavLink href="/examples/schema-array-field">Array Field Schema</NavLink>
      <NavLink href="/examples/schema-nested-array-field">
        Nested Array Field Schema
      </NavLink>
      <NavLink href="/examples/schema-relevant-array-field">
        Relevant ArrayField Schema
      </NavLink>
      <NavLink href="/examples/schema-custom">Custom Schema</NavLink>
      <h3>Multistep</h3>
      <NavLink href="/examples/multistep-intro">Basic Multistep</NavLink>
      <NavLink href="/examples/multistep-dynamic">Dynamic Multistep</NavLink>
      <NavLink href="/examples/multistep-initial-values">
        Multistep InitialValues
      </NavLink>
      <h3>Gotchas</h3>
      <NavLink href="/examples/initial-vs-default">Intial Vs Default</NavLink>
      <NavLink href="/examples/change-initial-values">
        Change Initial Values
      </NavLink>
      <NavLink href="/examples/initialize-if-pristine">
        Initialize Value If Pristine
      </NavLink>

      <h3>Tables</h3>
      <NavLink href="/examples/excel-sheet">Excel Sheet</NavLink>
      <NavLink href="/examples/huge-form">Huge Form</NavLink>
      <NavLink href="/examples/insanely-huge-form">Insanely Huge Form</NavLink>
      <NavLink href="/examples/table-inline-editing">
        Table Inline Editing
      </NavLink>
      <h3>Hidden</h3>
      <NavLink href="/examples/hidden-field">Hidden Field</NavLink>
      <h3>Huge Forms</h3>
      <NavLink href="/examples/huge-form">Huge Form</NavLink>
      <NavLink href="/examples/huge-array-field">Huge Array Field</NavLink>
      <h3>Cool</h3>
      <NavLink href="/examples/elon-musk">Elon Musk</NavLink>
      <NavLink href="/examples/new-product">New Product</NavLink>
      <h3>Fixed Bugs</h3>
      <NavLink href="/examples/after-relevance-bug">After Render Bug</NavLink>
      <NavLink href="/examples/after-relevance-bug-array">
        After Render Bug in Array
      </NavLink>
    </ul>
  );
};
