import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './InlineFunctions.md';

import { Form, Text } from '../../../src';

const validate = value => 'Field is not valid';

const InlineFunctions = () => (
  <div>
    <Form id="gotcha-render-form-1">
      {({ formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <h5>Bad Form</h5>
            <label htmlFor="gotcha-color-1">Color:</label>
            <small>Validate on blur</small>
            <Text
              field="color"
              id="gotcha-color-1"
              validateOnBlur
              debug
              validate={value => 'Field is not valid'}
              autoComplete="off"
            />
            <label htmlFor="gotcha-food-1">Food:</label>
            <small>Validate on change</small>
            <Text
              field="food"
              id="gotcha-food-1"
              validateOnChange
              debug
              validate={value => 'Field is not valid'}
              autoComplete="off"
            />
            <label htmlFor="gotcha-car-1">Car:</label>
            <small>Validate on blur and change</small>
            <Text
              field="car"
              id="gotcha-car-1"
              validateOnBlur
              validateOnChange
              debug
              validate={value => 'Field is not valid'}
              autoComplete="off"
            />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <Debug errors values />
          </div>
        </div>
      )}
    </Form>
    <Form id="gotcha-render-form-2">
      {({ formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <h5>Better Form</h5>
            <label htmlFor="gotcha-color-2">Color:</label>
            <small>Validate on blur</small>
            <Text
              field="color"
              id="gotcha-color-2"
              validateOnBlur
              debug
              validate={validate}
              autoComplete="off"
            />
            <label htmlFor="gotcha-food-2">Food:</label>
            <small>Validate on change</small>
            <Text
              field="food"
              id="gotcha-food-2"
              validateOnChange
              debug
              validate={validate}
              autoComplete="off"
            />
            <label htmlFor="gotcha-car-2">Car:</label>
            <small>Validate on blur and change</small>
            <Text
              field="car"
              id="gotcha-car-2"
              validateOnBlur
              validateOnChange
              debug
              validate={validate}
              autoComplete="off"
            />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <Debug errors values />
          </div>
        </div>
      )}
    </Form>
    <Form id="gotcha-render-form-3">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <h5>Best Form</h5>
          <label htmlFor="gotcha-color-2">Color:</label>
          <small>Validate on blur</small>
          <Text
            field="color"
            id="gotcha-color-2"
            validateOnBlur
            debug
            validate={validate}
            autoComplete="off"
          />
          <label htmlFor="gotcha-food-2">Food:</label>
          <small>Validate on change</small>
          <Text
            field="food"
            id="gotcha-food-2"
            validateOnChange
            debug
            validate={validate}
            autoComplete="off"
          />
          <label htmlFor="gotcha-car-2">Car:</label>
          <small>Validate on blur and change</small>
          <Text
            field="car"
            id="gotcha-car-2"
            validateOnBlur
            validateOnChange
            debug
            validate={validate}
            autoComplete="off"
          />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <Debug errors values />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, InlineFunctions);
