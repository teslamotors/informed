import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import EffectOrder from './EffectOrder';
import effectOrderCode from './EffectOrder.jsx?raw';
import { Info } from '../../../Info';

export default function AfterRenderBug() {
  return (
    <>
      <h1>After Relevance Bug</h1>
      <Info>
        The issue occured when a field “a” validates using a field “b” where
        field “b” is rendered after field “a”. There are three scenarios that
        are of concern here.
      </Info>

      <Info type="notice">
        1. validateOnMount IS passed in, the form will validate for the first
        profile but not the second. This is because when we validate "OnReset"
        field "b" does not have a value yet. This is an inconsistancy due to the
        fact that there is a difference between first render and reset. On first
        render there is a "double" initialization, one that happens before
        render, and one that occurs after. The purpose of this was to ensure
        things ( such as validation ) got triggered once all fields were
        rendered. When the user changes to the second profile, a reset will get
        triggered on all fields, validateOnMount still forces the field to
        validate, however at the time of validation for field "a", field "b" has
        not yet been set back to its new value. The solution to this was to
        break up the form "reset" function into two parts, where we first
        itterate and initialize the values and the second goes back and
        re-validates each field! ( only if validateOnMount was passed to that
        field)
      </Info>
      <Info type="notice">
        2. validateOnMount is NOT passed but validateWhen IS. Example
        {` validateWhen=['b']`} This resulted in the form performing NO
        validation for field "a" when it was first rendered, however when
        choosing a new profile it would perform validation, this is obviously
        due do the fact that when a reset occurs, a value change occurs for
        field "b" as it goes from "World" to "Elon". This triggers the internal
        subscription that gets created when passing {` validateWhen=['b']`} to
        field "a". To fix this we could update the code to emit an event in the
        second initialization because truly the value is changing. However this
        causes an entire new issue. Now this would, for example, trigger
        validation on a field that is required but we have no intention of
        showing the user this required error on mount. If we make this change,
        while it would fix the issue described, it would cause another. For now
        we may accept that there is truly a difference between the initial mount
        and a reset in the context of a validateWhen.
        <br />
      </Info>
      <Info type="notice">
        3. validateOnMount IS passed and also validateWhen IS passed. Example
        {` validateWhen=['b'] validateOnMount`}. This had a bug because, while
        in theory it would not encounter an issue as it should validate no
        matter what due to the issue descirbed in 2, it in fact has an issue in
        array fields... Why? ... Because array fields themselves have a special
        reset function. Similar to how leaf nodes ( normal fields ) register
        with the form controller so do arrayFields. Because array fields
        maintain a state of keys, which are used to optimize how array fields
        work internally, a reset will trigger a clear of these keys and a new
        one will be built. Note, this is similar to how the FormController will
        reset the entire form state before calling reset on all registered
        fields. The issue was because it would
        <br />
        <br />
        1: Initialize stuff[0].b
        <br />
        <br />
        2: CLEANUP REMOVING stuff[0].b
        <br />
        <br />
        3: Second Initialize stuff[0].a but now B value is gone do too cleanup
        <br />
        <br />
        The question here is why is the cleanup occuring after the initialize...
        it was because after resetting the keys of the array field it renders
        new items and after beginning to show the new items the old items will
        start to clean themselves up. The issue here is because the names are
        the same, for example {`Initialize stuff[0].b`} and{' '}
        {`DEREGISTER stuff[0].a`}, the order these occurs matters as it will set
        the new value to "Elon" but then the cleanup function will blow it away!
        Technically it comes back due to our "SecondInitialize" call but thats
        to little too late because at the time a validates ( on second
        initialize ) b wont have its value. The fix described in 2 would also
        fixed this issue.
        <br />
        <br />
        NOTE: To understand this probelm better see the "Effect Order" example
        below
      </Info>
      <h2> Example Scneario 1</h2>
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
