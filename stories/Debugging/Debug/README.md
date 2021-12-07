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

In addition to the exported helpers, informed also comes with internal logging that can be enabled in one of two ways.

#### When running in a browser ( development )

```js
localStorage.debug = 'informed:.*';
```

#### When running in node ( unit tests )

```js
DEBUG = 'informed:.*';
```
