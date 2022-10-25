import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, DebugField, useFieldState } from '../../../src';

const googleAutocomplete = async text =>
  new Promise((resolve, reject) => {
    // console.log('GATHER', text);

    if (!text) {
      return reject('Need valid text input');
    }

    // for use in things like GatsbyJS where the html is generated first
    if (typeof window === 'undefined') {
      return reject('Need valid window object');
    }

    try {
      new window.google.maps.places.AutocompleteService().getPlacePredictions(
        { input: text, componentRestrictions: { country: 'us' } },
        places => {
          if (places) {
            resolve(places.map(p => p.description));
          } else {
            resolve();
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });

const AddressSearch = () => {
  const { data } = useFieldState('address');

  return (
    <>
      <Input
        list="addresses"
        name="address"
        label="Address:"
        // gatherOnMount
        gatherData={googleAutocomplete}
      />
      {data && (
        <datalist id="addresses">
          {data.map(p => {
            return <option key={p} value={p} />;
          })}
        </datalist>
      )}
    </>
  );
};

const InputExample = () => {
  // const [initialValues, setInitialValues] = useState();

  return (
    <Form autoComplete="off">
      <AddressSearch />
      {/* <button
        type="button"
        onClick={() =>
          setInitialValues({
            address: '111'
          })
        }>
        Change
      </button> */}
      <button type="submit">Submit</button>
      <h3>Form State:</h3>
      <Debug values data gathering />
      <h3>Field State:</h3>
      <DebugField name="address" gathering data value />
    </Form>
  );
};

export default withDocs(readme, InputExample);
