import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Modal from '../../utils/Modal';

import { Form, Input, Scope, Debug } from '../../../src';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const duplicateValidation = (value, values) => {
  return values.filter(v => v === value).length > 1
    ? 'This field must be unique.'
    : undefined;
};

const friendValidation = (value, values) => {
  // console.log('WTF1', basicValidation(value));
  // console.log('WTF2', values.fiends && duplicateValidation(value, values.friends));
  return basicValidation(value) || duplicateValidation(value, values.friends);
};

class ComplexValidation extends React.Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={({ values }) =>
            window.alert(JSON.stringify(values, null, 2))
          }>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Input
                name="name"
                label="First name:"
                validate={basicValidation}
              />
              <Scope scope="favorite">
                <Input
                  name="color"
                  label="Favorite color:"
                  validate={basicValidation}
                />
                <Input
                  name="food"
                  label="Favorite food:"
                  validate={basicValidation}
                />
              </Scope>
              <Input
                name="friends[0]"
                label="Friend 1:"
                validate={friendValidation}
              />
              <Input
                name="friends[1]"
                label="Friend 2:"
                validate={friendValidation}
              />
              <Input
                name="friends[2]"
                label="Friend 3:"
                validate={friendValidation}
              />
              <button type="submit">Submit</button>
            </div>
            <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
              <Debug values errors invalid valid />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withDocs(readme, () => <ComplexValidation />);
