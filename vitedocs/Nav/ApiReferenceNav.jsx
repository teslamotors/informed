import { NavLink } from './NavLink';

export const ApiReferenceNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Hooks</h3>
      <NavLink href="/api-reference/useField" exact>
        useField
      </NavLink>
      <NavLink href="/api-reference/useForm" exact>
        useForm
      </NavLink>
      <NavLink href="/api-reference/useFieldState" exact>
        useFieldState
      </NavLink>
      <NavLink href="/api-reference/useFieldApi" exact>
        useFieldApi
      </NavLink>
      <NavLink href="/api-reference/useFormState" exact>
        useFormState
      </NavLink>
      <NavLink href="/api-reference/useformApi" exact>
        useformApi
      </NavLink>
      <NavLink href="/api-reference/useSubState" exact>
        useSubState
      </NavLink>
      <NavLink href="/api-reference/useScopedState" exact>
        useScopedState
      </NavLink>
      <h3>State</h3>
      <NavLink href="/api-reference/formState">FormState</NavLink>
      <NavLink href="/api-reference/fieldState">FieldState</NavLink>
      <h3>Api</h3>
      <NavLink href="/api-reference/formApi">FormApi</NavLink>
      <NavLink href="/api-reference/fieldApi">FieldApi</NavLink>
      <h3>Refs</h3>
      <NavLink href="/api-reference/formApiRef">formApiRef</NavLink>
      <h3>Components</h3>
      <NavLink href="/api-reference/relevant">Relevant</NavLink>
      <NavLink href="/api-reference/scope">Scope</NavLink>
      <NavLink href="/api-reference/array-field">ArrayField</NavLink>
      <NavLink href="/api-reference/form-provider">FormProvider</NavLink>
      <h3>Path</h3>
      <NavLink href="/api-reference/path-syntax">Syntax</NavLink>
      <h3>Formatting</h3>
      <NavLink href="/api-reference/formatting-formatter">Formatter</NavLink>
      <NavLink href="/api-reference/formatting-number">
        Number Formatter
      </NavLink>
      <NavLink href="/api-reference/formatting-clean">Clean</NavLink>
      <NavLink href="/api-reference/formatting-mask">Mask</NavLink>
      <NavLink href="/api-reference/formatting-parse">Parse</NavLink>
      <NavLink href="/api-reference/formatting-formatter-functions">Formatter Functions</NavLink>
      <h3>Validation</h3>
      <NavLink href="/api-reference/validation" exact>
        Validation
      </NavLink>
      <NavLink href="/api-reference/async-validation">Async Validation</NavLink>
      <NavLink href="/api-reference/validation-control" exact>
        Validation Control
      </NavLink>
      <NavLink href="/api-reference/paired-validation">
        Paired Validation
      </NavLink>
      <NavLink href="/api-reference/validation-messages">
        Validation Messages
      </NavLink>
      <NavLink href="/api-reference/focus-validation">Focus On Error</NavLink>
      <NavLink href="/api-reference/scroll-validation">Scroll To Error</NavLink>
      <h3>Arrays</h3>
      <NavLink href="/api-reference/arrays-array-field" exact>
        ArrayField
      </NavLink>
      <NavLink href="/api-reference/arrays-array-field-item" exact>
        ArrayField.Item
      </NavLink>
      <NavLink href="/api-reference/arrays-array-field-reset" exact>
        ArrayField Reset
      </NavLink>
      <NavLink href="/api-reference/arrays-array-field-clear" exact>
        ArrayField Clear
      </NavLink>
      <NavLink href="/api-reference/arrays-array-field-swap" exact>
        ArrayField Swap
      </NavLink>
      <NavLink href="/api-reference/arrays-array-field-insert" exact>
        ArrayField Insert
      </NavLink>
      <NavLink href="/api-reference/arrays-nested-array-field" exact>
        Nesetd ArrayField
      </NavLink>
      <h3>Schema</h3>
      <NavLink href="/api-reference/schema-intro" exact>
        Intro
      </NavLink>
      <NavLink href="/api-reference/relevant-schema">Relevance</NavLink>
      <NavLink href="/api-reference/conditional-schema-control">
        Conditional Schema Control
      </NavLink>
      <NavLink href="/api-reference/schema-nested">Nested Schema</NavLink>
      <NavLink href="/api-reference/schema-conditional-option">
        Conditional Option Schema
      </NavLink>
      <NavLink href="/api-reference/schema-formatted">Formatted Schema</NavLink>
      <NavLink href="/api-reference/schema-array-field">
        Array Field Schema
      </NavLink>
      <NavLink href="/api-reference/schema-nested-array-field">
        Nested Array Field Schema
      </NavLink>
      <NavLink href="/api-reference/schema-relevant-array-field">
        Relevant ArrayField Schema
      </NavLink>
      <NavLink href="/api-reference/schema-custom">Custom Schema</NavLink>
      <NavLink href="/api-reference/schema-components">Schema Components</NavLink>
      <NavLink href="/api-reference/schema-sub">Sub Schema</NavLink>
      <h3>Relevance</h3>
      <NavLink href="/api-reference/relevant-component">Relevant Component</NavLink>
      <NavLink href="/api-reference/relevant-scoped">Scoped Relevance</NavLink>
      <NavLink href="/api-reference/relevant-arrays">Relevance in Arrays</NavLink>
      <NavLink href="/api-reference/relevant-schema">Schema Relevance</NavLink>
      <NavLink href="/api-reference/relevance-optimization">Relevance Optimization</NavLink>
      <h3>Multistep</h3>
      <NavLink href="/api-reference/multistep-intro" exact>
        Intro
      </NavLink>
      <NavLink href="/api-reference/multistep-state" exact>
        Multistep State
      </NavLink>
      <NavLink href="/api-reference/multistep-dynamic" exact>
        Dynamic Multistep
      </NavLink>
      <h3>Keeping State</h3>
      <NavLink href="/api-reference/keep-state" exact>
        keepState
      </NavLink>
      <NavLink href="/api-reference/keep-state-if-relevant" exact>
        Keep State If Relevant
      </NavLink>
      <h3>MetaData</h3>
      <NavLink href="/api-reference/metadata" exact>
        Metadata
      </NavLink>
      <NavLink href="/api-reference/async-options" exact>
        Async Options
      </NavLink>
      <h3>Global Forms</h3>
      <NavLink href="/api-reference/global-field-state" exact>
        Field State
      </NavLink>
      <NavLink href="/api-reference/global-form-state" exact>
        Form State
      </NavLink>
      <h3>Debugging</h3>
      <NavLink href="/api-reference/debug-component" exact>
        Debug Component
      </NavLink>
      <NavLink href="/api-reference/debug-logs" exact>
        Debug Logs
      </NavLink>
      <br />
      <br />
    </ul>
  );
};
