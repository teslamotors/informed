import { Debug, DebugField, useFieldState } from 'informed';
import { useMemo } from 'react';
import { Form, Button, ComboBox } from 'YourComponents';

// First add this script tag to your app
// <script
//   type="text/javascript"
//   src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&language=en&libraries=places"
// ></script>

const googleAutocomplete = async text =>
  new Promise((resolve, reject) => {
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
  const { data = [] } = useFieldState('address');

  const items = useMemo(
    () => {
      return data.map((item, i) => ({
        id: i,
        value: item
      }));
    },
    [data]
  );

  return (
    <ComboBox
      name="address"
      label="Address:"
      gatherData={googleAutocomplete}
      items={items}
    />
  );
};

const Example = () => (
  <Form>
    <AddressSearch />
    <Button type="submit">Submit</Button>
    <Debug values data gathering />
    <DebugField name="address" gathering data value />
  </Form>
);

export default Example;
