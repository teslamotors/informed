import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../../Info';

export default function ScopedFieldState() {
  return (
    <>
      <h1>
        Scoped <code>useFieldState</code>
      </h1>
      <Info>
        Scope is a very useful tool for simplifying your code but you can easily
        make mistakes when using it.
        <br />
        <br />
        Below is an example where you could misuse the useFieldState. Type into
        the field and Note how the text below to color: gets updated while
        nothing changes next to favorite.color:
      </Info>
      <Info type="notice">
        Note how passing <code>false</code> as a second parameter to
        <code>useFieldState</code> will un scope the hook.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
    </>
  );
}
