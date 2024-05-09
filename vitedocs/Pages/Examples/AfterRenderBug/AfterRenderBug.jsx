import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function AfterRenderBug() {
  return (
    <>
      <h1>After Render Bug</h1>
      <Info>
        The issue occured when a field “a” validates using a field “b” where
        field “b” is rendered after field “a”. There are three scenarios that
        are of concern here.
      </Info>

      <Info type="notice">
        <code>Scenario1:</code>
        <Code>
          {`// validateOnMount is passed to field "a" 
<Input name="a" label="A" validate={validate} showErrorIfError validateOnMount />
<Input name="b" label="B" />`}
        </Code>
        <br />
        validateOnMount IS passed in, the form will validate for the first
        profile but not the second. This is because when we validate "OnReset"
        field "b" does not have a value yet. This is an inconsistancy due to the
        fact that there is a difference between first render and reset. On first
        render there is a "double" initialization, one that happens before
        render, and one that occurs after.
        <br />
        <br />
        The purpose of this was to ensure things ( such as validation ) got
        triggered once all fields were rendered.
        <br />
        <br />
        When the user changes to the second profile, a reset will get triggered
        on all fields, validateOnMount still forces the field to validate,
        however at the time of validation for field "a", field "b" has not yet
        been set back to its new value.
        <br />
        <br />
        The solution to this was to break up the form "reset" function into two
        parts, where we first itterate and initialize the values and the second
        goes back and re-validates each field! ( only if validateOnMount was
        passed to that field )<br />
        <br />
        <strong>Bug - Fixed in v4.60.0</strong>
      </Info>
      <Info type="notice">
        <code>Scenario2:</code>
        <Code>
          {`// validateOnMount is NOT passed but validateWhen IS 
<Input name="a" label="A" validate={validate} showErrorIfError validateWhen={['b']} />
<Input name="b" label="B" />`}
        </Code>
        <br />
        This results in the form performing NO validation for field "a" when it
        was first rendered, however when choosing a new profile it would perform
        validation.
        <br />
        <br />
        This is obviously due do the fact that when a reset occurs, a value
        change occurs for field "b" as it goes from "World" to "Elon" ( see
        example below ).
        <br />
        <br />
        This triggers the internal subscription that gets created when passing{' '}
        {` validateWhen=['b']`} to field "a". To fix this we could update the
        code to emit an event in the second initialization because truly the
        value is changing. However this causes an entire new issue. Now this
        would, for example, trigger validation on a field that is required but
        we have no intention of showing the user this required error on mount.
        If we make this change, while it would fix the issue described, it would
        cause another. For now we may accept that there is truly a difference
        between the initial mount and a reset in the context of a validateWhen.
        <br />
        <br />
        <strong>Expected Behavior - Nothing to fix</strong>
      </Info>
      <Info type="notice">
        <code>Scenario3:</code>
        <Code>
          {`// both validateOnMount, and validateWhen are passed in
<Input name="a" label="A" validate={validate} showErrorIfError validateOnMount validateWhen={['b']} />
<Input name="b" label="B" />`}
        </Code>
        <br />
        This had a bug because, while in theory it would not encounter an issue
        as it should validate no matter what due to the issue descirbed in 2, it
        in fact has an issue in array fields...
        <br />
        <br />
        Why? ... Because array fields themselves have a special reset function.
        Similar to how leaf nodes ( normal fields ) register with the form
        controller so do arrayFields.
        <br />
        <br />
        Because array fields maintain a state of keys, which are used to
        optimize how array fields work internally, a reset will trigger a clear
        of these keys and a new one will be built. Note, this is similar to how
        the FormController will reset the entire form state before calling reset
        on all registered fields. In order to go into more details on this issue
        please visit the array version of this bug in the docs :)
        <br />
        <br />
        <strong>Bug - Fixed in v4.60.0</strong>
      </Info>
      <h2> Example Scneario 1</h2>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
    </>
  );
}
