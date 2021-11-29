import React, { Component } from 'react';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Scope, Debug } from '../../../../src';

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form
          errorMessage={{
            required: 'This is field is required for your profile!'
          }}
          onSubmit={({ values }) =>
            window.alert(JSON.stringify(values, null, 2))
          }>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Input
                name="first"
                label="First name:"
                required
                errorMessage="There is a problem with this field!"
              />
              <Input
                name="last"
                label="Last name:"
                required
                errorMessage={{ required: 'Last name is required!' }}
              />
              <Input name="favoriteColor" label="Favorite color:" required />
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

export default withDocs(readme, () => <SimpleValidation />);
