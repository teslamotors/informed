import { NavLink } from './NavLink';

export const ApiReferenceNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <h3>Hooks</h3>
      <NavLink href="/api-reference/useField">useField</NavLink>
      <NavLink href="/api-reference/useFieldState">useFieldState</NavLink>
      <NavLink href="/api-reference/useFieldApi">useFieldApi</NavLink>
      <NavLink href="/api-reference/useFormState">useFormState</NavLink>
      <NavLink href="/api-reference/useformApi">useformApi</NavLink>
      <h3>Components</h3>
      <NavLink href="/api-reference/relevance">Relevance</NavLink>
      <NavLink href="/api-reference/scope">Scope</NavLink>
    </ul>
  );
};
