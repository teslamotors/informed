import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './WithField.md';

import { Form, Text, withFieldApi, Scope } from '../../../src';

const validate = (value)=>'Field is not valid';

const FieldApiInfo = ({fieldApi}) => (
  <code>{fieldApi.getValue()}</code>
);

const WithFavoriteColorInfo = withFieldApi('favorite.color')(FieldApiInfo);
const WithColorInfo = withFieldApi('color')(FieldApiInfo);

const WithField = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <div>
          <form onSubmit={formApi.submitForm} id="gotcha-form-2">
            <Scope scope="favorite">
              <Text field="color" />
              favorite.color: <WithFavoriteColorInfo />
              color: <WithColorInfo />
            </Scope>
          </form>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Errors:</label>
            <Code language="language-js">
              {JSON.stringify(formState.errors, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, WithField );
