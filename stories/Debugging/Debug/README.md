# Debug Components

Sometimes you just want to see whats going on with the form state.
This can easily be achieved by rendering Debug components.

<!-- STORY -->

```jsx
import { Form, Input, Debug, DebugField } from 'informed';

<Form>
  <Input name="name" label="Name:" />
  <button type="submit">Submit</button>
  <Debug />
  <DebugField name="name" />
</Form>;
```

## Debugging Logs

In addition to the exported helpers, informed also comes with internal logging that can be enabled in following ways:

#### When running in a browser ( development )

```js
localStorage.debug = 'informed:.*';
```

#### When running in React Native ( development )

```js
// only enable this in __DEV__ environment
if (__DEV__) {
  global.DEBUG_INFORMED = 'informed:.*';
}
```

#### When running in node ( unit tests )

```js
DEBUG = 'informed:.*';
```

To reset debugging just set the flag back to an empty string.
