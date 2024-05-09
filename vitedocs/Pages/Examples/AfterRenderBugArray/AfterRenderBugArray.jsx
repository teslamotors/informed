import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';
import EffectOrder from './EffectOrder';
import effectOrderCode from './EffectOrder.jsx?raw';

export default function AfterRenderBugArray() {
  return (
    <>
      <h1>After Render Bug In Array</h1>
      <Info>
        This is a similar issue as AfterRenderBug but within an array field.
      </Info>
      <Info type="notice">
        This issue occured when we had validateOnMount and also validateWhen
        passed to inputs within an array field.
        <br />
        <br />
        Specifically where field "a" validates when field "b" changes and field
        "b" gets rendered after field "a".
        <Code>
          {`// both validateOnMount, and validateWhen are passed in
<Input name="a" label="A" validate={validate} showErrorIfError validateOnMount validateWhen={['b']} />
<Input name="b" label="B" />`}
        </Code>
        <br />
        The behavior observed would occur when changing profiles and therefore
        triggering a form reset.
        <br />
        <br />
        The validateOnMount would trigger a validation after the "Second
        Initialize" of field "a". But due to the lifecycle of react. Because
        array fields maintain a state of keys, which are used to optimize how
        array fields work internally, a reset would trigger a clear of these
        keys and a new one will be built.
        <br />
        <br />
        So basically what would occur would be the following:
        <br />
        <br />
        1: The array field <code>stuff</code> would set a new array of keys,
        causing new fields to start to render. Remember, interally we call
        initialize in a layoutEffect which occurs <strong>BEFORE</strong> any{' '}
        <code>useEffect</code> cleanups.
        <Code>{`// ==> Initialize stuff[0].b ... new value of "Elon" set`}</Code>
        <br />
        2: Now, the old field <code>"b"</code> would start to clean itself up,{' '}
        <strong>REMOVING</strong> the value that just got initialized.
        <Code>{`// ==> CLEANUP REMOVING stuff[0].b ... new value of "Elon" removed!`}</Code>
        <br />
        3: Finally the second initialize would trigger for field{' '}
        <code>"a"</code> but now B value is gone do to the cleanup that occured
        <Code>{`// ==> Second Initialize stuff[0].a ... validates with a value of undefined for field "b"`}</Code>
        <br />
        The order these occurs matters as it will set the new value to "Elon"
        but then the cleanup function will blow it away! Technically it comes
        back due to our "SecondInitialize" call but thats to little too late
        because at the time <code>"a"</code> validates ( on second initialize )
        <code>"b"</code> wont have its value.
        <br />
        <br />
        The solution to this was a bit interesting but seems to have worked!
        Basically Internally I wait until all fields part of an array field, in
        this case <code>"stuff"</code>
        finish cleaning up after themselves, only then do I set the new set of
        keys which will begin the process of re-rendering the new inputs :)
        <br />
        <br />
        <strong>Bug - Fixed in v4.60.0</strong>
      </Info>
      <Info>
        Note: This bug could more clearly be seen with this example as we error
        out IF there is NO value for "b". Prior to this fix, as you change from
        profile1 to profile2, field A would error out! This is due to the issue
        described above.
      </Info>
      <Info type="notice">
        Note: To better undertand reacts lifecylce please open inspector and
        view the example below labeled <code>Understanding Effect Order</code>
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <hr />
      <h2>Understanding Effect Order</h2>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<EffectOrder />}
        right={<Code links input1={effectOrderCode} />}
      />
    </>
  );
}
