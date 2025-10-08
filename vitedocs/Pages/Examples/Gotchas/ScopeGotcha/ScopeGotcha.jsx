import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ScopeGotcha() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Scope Gotcha</code>
      </h1>
      <Info>
        Scope is a very useful tool for simplifying your code, but you can easily make 
        mistakes when using it. One common gotcha is with the <code>useFieldState</code> hook.
        <br />
        <br />
        The key thing to remember is that the result of the <code>useField</code> hooks is 
        affected just like <code>Input</code> fields. When you write:
        <br />
        <br />
        <code>&lt;Input name="color" /&gt;</code> within a <code>&lt;Scope scope="favorite" /&gt;</code>,
        the result in the values is <code>favorite.color</code>.
        <br />
        <br />
        Putting a component that uses <code>useFieldState</code> or <code>useFieldApi</code> 
        is affected in the exact same way!
        <br />
        <br />
        <strong>To opt out of this behavior:</strong> Pass <code>false</code> as a second 
        parameter to <code>useFieldState</code> or <code>useFieldApi</code>.
        <br />
        <br />
        <strong>Instructions:</strong>
        <br />
        1. Type into the color field and observe how the text updates
        <br />
        2. Notice how "favorite.color: (un-scoped)" and "color: (scoped)" both update
        <br />
        3. Notice how "favorite.color: (scoped)" does NOT update because it uses the full name of the field
        <code>useFieldState(name)</code> while inside of the scope.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
