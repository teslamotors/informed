# Dynamic Form

<!-- STORY -->

```jsx
import React, { useState } from 'react';
import { Form, Text } from 'informed';

const DynamicForm = () => {

  const [field1, setField1] = useState('foo');
  const [field2, setField2] = useState('baz');
  const [field3, setField3] = useState('boo');

  const toggle1 = () => {
    setField1(field1 === 'foo' ? 'bar' : 'foo');
  };

  const toggle2 = () => {
    setField2(field2 === 'baz' ? 'taz' : 'baz');
  };

  const toggle3 = () => {
    setField3(field3 === 'boo' ? 'far' : 'boo');
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
