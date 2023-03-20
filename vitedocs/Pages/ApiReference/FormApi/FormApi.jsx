import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import { Link } from '../../../Link';
import Example from './Example';
import code from './Example.jsx?raw';
import Code from '../../../Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function FormState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Form Api</code>
      </h1>
      <Info>
        You can gain access to the forms api via `useFormApi` or `formApiRef`.
        Below we create some buttons to randomly set the color of our car using
        `formApi.setValue`
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={code} />}
      />
      <hr />
      <h2>Api</h2>
      <TableView aria-label="Function table" overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Function
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>submitForm</code>
            </Cell>
            <Cell>
              <Code>submitForm()</Code>
            </Cell>
            <Cell>
              Submits form and trigger some lifecycle events.
              <ol>
                <li>It will set all the fields to touched.</li>
                <li>It will call all validators.</li>
                <li>It will call onSubmit if the form is valid.</li>
              </ol>
              <br />
              <strong>Note: </strong>
              This function can be called manually however it is also called if
              you have a button with type='submit' within the &lt;Form&gt;.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValue</code>
            </Cell>
            <Cell>
              <Code>setValue('greeting', 'Hello')</Code>
            </Cell>
            <Cell>
              Function that takes two parameters, the first is the field name,
              and the second is the value you want to set it to.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getValue</code>
            </Cell>
            <Cell>
              <Code>getValue('greeting')</Code>
            </Cell>
            <Cell>
              Function that when given a field name will return its value.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setTouched</code>
            </Cell>
            <Cell>
              <Code>setTouched('greeting', true)</Code>
            </Cell>
            <Cell>
              Function that takes two parameters, the first is the field name,
              and the second is true or false.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getTouched</code>
            </Cell>
            <Cell>
              <Code>getTouched('greeting')</Code>
            </Cell>
            <Cell>
              Function that when given a field name will return whether or not
              its touched.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setError</code>
            </Cell>
            <Cell>
              <Code>setError('greeting', 'Error message')</Code>
            </Cell>
            <Cell>
              Function that takes two parameters, the first is the field name,
              and the second is the error message you want to set it to.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getError</code>
            </Cell>
            <Cell>
              <Code>getError('greeting')</Code>
            </Cell>
            <Cell>
              Function that when given a field name will return its error.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getFormState</code>
            </Cell>
            <Cell>
              <Code>getFormState()</Code>
            </Cell>
            <Cell>
              Function that returns the formState. Note this will only return
              the state as it existed when the function was called.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>reset</code>
            </Cell>
            <Cell>
              <Code>reset()</Code>
            </Cell>
            <Cell>Function that will reset the form to its initial state.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValues</code>
            </Cell>
            <Cell>
              <Code>{`setValues({ greeting: 'hello'})`}</Code>
            </Cell>
            <Cell>Function that will set the fields values.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>setFormError</code>
            </Cell>
            <Cell>
              <Code>setFormError('There was an error!')</Code>
            </Cell>
            <Cell>Function that will set the forms error manually.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>validate</code>
            </Cell>
            <Cell>
              <Code>validate()</Code>
            </Cell>
            <Cell>
              Function that will trigger the forms validation manually.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValues</code>
            </Cell>
            <Cell>
              <Code>setValues(values)</Code>
            </Cell>
            <Cell>
              Function that will set all form values (clearing values you don't
              include).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setTheseValues</code>
            </Cell>
            <Cell>
              <Code>setTheseValues(values)</Code>
            </Cell>
            <Cell>Function that will set some form values.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>fieldExists</code>
            </Cell>
            <Cell>
              <Code>fieldExists('fieldName')</Code>
            </Cell>
            <Cell>
              Function that when given a field name will return whether or not
              it exists (i.e., the component is rendered).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>resetPath</code>
            </Cell>
            <Cell>
              <Code>resetPath("brothers.friend")</Code>
            </Cell>
            <Cell>
              Function that will reset all fields under the given path.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>disable</code>
            </Cell>
            <Cell>
              <Code>disable()</Code>
            </Cell>
            <Cell>Function that will disable the form.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>enable</code>
            </Cell>
            <Cell>
              <Code>enable()</Code>
            </Cell>
            <Cell>
              Function that will enable the form. PLEASE NOTE if you pass in the
              disabled prop, that will override this.
            </Cell>
          </Row>
        </TableBody>
      </TableView>
      <br />
      <br />
    </>
  );
}
