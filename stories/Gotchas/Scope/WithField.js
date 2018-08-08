import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './WithField.md';

import { Form, Text, withFieldState, Scope } from '../../../src';

const FieldInfo = ({ fieldState }) => <code>{fieldState.value}</code>;

const WithFavoriteColorInfo = withFieldState('favorite.color')(FieldInfo);
const WithColorInfo = withFieldState('color')(FieldInfo);

const WithField = () => (
  <div>
    <Form id="gotcha-form-2">
      {({ formApi, formState }) => (
        <div>
          <Scope scope="favorite">
            <Text field="color" />
            <div>
              favorite.color: <WithFavoriteColorInfo />
            </div>
            <div>
              color: <WithColorInfo />
            </div>
          </Scope>
          <label>Values:</label>
          <Code language="language-js">
            {JSON.stringify(formState.values, null, 2)}
          </Code>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs(readme, WithField);
