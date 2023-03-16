import React from 'react';
import { Debug } from 'informed';
import Input from '../../Inputs/Input';
import Form from '../../Inputs/Form';
import { Button } from '@adobe/react-spectrum';
import pageContent from './Home.jsx?raw';
import Code from '../../Code';

export const Home = () => {
  return (
    <>
      <Form>
        <Input name="name" label="Name" required="Name Required" />
        <Input name="age" type="number" label="Age" required="Age Required" />
        <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Input name="color" label="Favorite Color" defaultValue="Green" />
        <Button type="submit">submit</Button>
        <div style={{ textAlign: 'left' }}>
          <Debug />
        </div>
        <Code input1={pageContent} />
      </Form>
    </>
  );
};
