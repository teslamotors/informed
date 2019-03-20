# Dynamic Form

Often you need to "pull the rug" out from under a form and dynamically change
the contents. This is easily achieved with informed. Below is an example of three
inputs, and three toggle buttons. The first two inputs are basically the same but are
simply toggled in two different ways ( same result different code ). The third one
is special because it has an additional "keep-state" prop. 

Do this! Enter somthing in the first and second fields, then hit the first two toggle buttons.
Notice how the old values are removed from the form state, and the fields are updated. Sometimes,
this is what a developer wants! When they change the field they want the old value to go away. BUT! 
sometimes this is not what a developer wants. Instead, they may want a fields value to stick around.
In order to achive this, you simply tell informed to "keep the state". 

Do this now! Enter somthing in the third field and hit the third toggle button. Enter a new value in the empty field, 
and then toggle again! You can see how the value persisted!

<!-- STORY -->

```jsx
import React, { useState } from 'react';
import { Form, Text } from 'informed';

const DynamicForm = () => {

  const [field1, setField1] = useState('foo');
  const [field2, setField2] = useState('baz');
  const [field3, setField3] = useState('boo');
  const [disabled, setDisabled] = useState(true);

  const toggle1 = () => {
    setField1(field1 === 'foo' ? 'bar' : 'foo');
  };

  const toggle2 = () => {
    setField2(field2 === 'baz' ? 'taz' : 'baz');
  };

  const toggle3 = () => {
    setField3(field3 === 'boo' ? 'far' : 'boo');
  };

  const toggle4 = () => {
    setDisabled(dis => !dis);
  };

  return (
    <div>
      <Form>
        <label htmlFor="field1" key={field1}>
          {field1}:<Text field={field1} id="field1" />
        </label>
       
        {field2 === 'baz' ? (
          <label htmlFor="baz" key="baz">
            baz:
            <Text field="baz" id="baz" />
          </label>
        ) : (
          <label htmlFor="taz" key="taz">
            taz:
            <Text field="taz" id="taz" />
          </label>
        )}

        <label htmlFor="field3" key={field3}>
          {field3}:<Text field={field3} id="field3" keepState />
        </label>

        <label key="diabled">
          Diabled:<Text field="disabled" disabled={disabled} />
        </label>
      
        <button type="submit">Submit</button>
      </Form>
      <button onClick={toggle1}>Toggle Foo {'<->'} Bar</button>
      <br />
      <button onClick={toggle2}>Toggle Baz {'<->'} Taz</button>
      <br />
      <button onClick={toggle3}>Toggle Boo {'<->'} Far</button>
      <br />
    </div>
  );
};

```
