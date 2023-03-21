import React from 'react';
import { Debug } from 'informed';
import Input from '../../YourComponents/Input';
import Form from '../../YourComponents/Form';
import { Button } from '@adobe/react-spectrum';
import pageContent from './Home.jsx?raw';
import Code from '../../YourComponents/Code';

export const Home = () => {
  return (
    <>
      <Form>
        <Input name="name" label="Name" required="Name Required" />
        <Input name="age" type="number" label="Age" required="Age Required" />
        <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Input name="color" label="Favorite Color" defaultValue="Green" />
        <Button type="submit">submit</Button>
        <Debug />
        <Code input1={pageContent} />
      </Form>
    </>
  );
};
