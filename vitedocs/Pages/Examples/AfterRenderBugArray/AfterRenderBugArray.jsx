import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function AfterRenderBugArray() {
  return (
    <>
      <h1>After Render Bug In Array</h1>
      <Info>
        This is a similar issue as AfterRenderBug but within an array field.
      </Info>
      <Info type="notice">
        This issue occured when we had validateOnMount and also validateWhen
        passed to inputs within an array field, specifically where field "a"
        validates when field "b" changes and field "b" gets rendered after field
        "a". The behavior observed would be, when changing profiles and
        therefore triggering a form reset, the validateOnMount would trigger a
        validation after the "Second Initialize" of field "a". But due to the
        lifecycle of react. Because array fields maintain a state of keys, which
        are used to optimize how array fields work internally, a reset will
        trigger a clear of these keys and a new one will be built. Note, this is
        similar to how the FormController will reset the entire form state
        before calling reset on all registered fields. The issue was because it
        would
        <br />
        <br />
        1: Initialize stuff[0].b ( due to setting a new set of keys )<br />
        <br />
        2: CLEANUP REMOVING stuff[0].b ( due to old inputs cleaning up )<br />
        <br />
        3: Second Initialize stuff[0].a but now B value is gone do too cleanup
        <br />
        <br />
        The question here is why is the cleanup occuring after the initialize...
        it was because after resetting the keys of the array field it renders
        new items and after beginning to show the new items the old items will
        start to clean themselves up. The issue here is because the names are
        the same, for example {`Initialize stuff[0].b`} and{' '}
        {`DEREGISTER stuff[0].b`}, the order these occurs matters as it will set
        the new value to "Elon" but then the cleanup function will blow it away!
        Technically it comes back due to our "SecondInitialize" call but thats
        to little too late because at the time a validates ( on second
        initialize ) b wont have its value. Why?.. becuase after the first
        initialize, the old "b" will clean himself up, removing the newly
        initialized value "Elon", for field "b". Because at the time of second
        initialization for "a" the value for "b" is undefiend it will error out,
        even tho its not supposed to be in an error state! The solution to this
        was a bit interesting but seems to have worked! Basically Internally I
        wait until all fields part of this array field finish cleaning up after
        themselves, only then do I set the new set of keys which will begin the
        process of re-rendering the new inputs :)
      </Info>
      <Info>
        <br />A few things to note:
        <br />
        <br />
        1. Resetting an array field will technically result in a removel of all
        children fields, therefore we updated array field to deregister + remove
        all records of these fields.
        <br />
        <br />
        2. This bug can more clearly be seen with this example as we error out
        IF there is NO value for "b". Watch as you change from profile1 to
        profile2, field A will error out! This is due to the issue described
        above.
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
