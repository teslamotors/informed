import { NavLink } from './NavLink';

export const ApiReferenceNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Hooks</h3>
      <NavLink href="/api-reference/useField" exact>
        useField
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
      <h3>Components</h3>
      <NavLink href="/api-reference/relevant">Relevant</NavLink>
      <NavLink href="/api-reference/scope">Scope</NavLink>
      <NavLink href="/api-reference/array-field">ArrayField</NavLink>
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
    </ul>
  );
};
