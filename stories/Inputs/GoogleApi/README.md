# GoogleApi

This example shows how you can use informed's `gatherData` to make api calls via google api.

<!-- STORY -->

<!-- <details>

<summary><strong>See CSS Used for above example ;)</strong></summary>

```css
.address-option {
  width: 100%;
  background-color: #f4f4f4;
  padding: 10px 20px;
}

.address-option:hover {
  background-color: #9d9c9c;
  cursor: pointer;
}
```

</details> -->

```jsx
import { Form, Input, Debug, useFieldState } from 'informed';

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
  const { data } = useFieldState('address');

  return (
    <>
      <Input
        list="addresses"
        name="address"
        label="Address:"
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

const InputExample = () => (
  <Form>
    <AddressSearch />
    <button type="submit">Submit</button>
    <Debug values data gathering />
    <DebugField name="address" gathering data value />
  </Form>
);
```
