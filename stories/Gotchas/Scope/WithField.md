# Scope

Scope is a very useful tool for simplifying your code but you can easily make
mistakes when using it.

## WithField:

Below is an example where you could misuse the `withFieldState` high order
component.

**
Type into the field and Note how the text next to `color:` gets upated while nothing
changes next to `favorite.color:`
**

<!-- STORY -->

**
Why? Lets take a look at the code below:
**

```jsx
import { Form, Text, Scope, withFieldState } from 'informed';

const FieldInfo = ({ fieldState }) => <code>{fieldState.value}</code>;

const WithFavoriteColorInfo = withFieldState('favorite.color')(FieldInfo);
const WithColorInfo = withFieldState('color')(FieldInfo);

<Form id="gotcha-form-2">
  <Scope scope="favorite">
    <Text field="color" />
    <div>
      favorite.color: <WithFavoriteColorInfo />
    </div>
    <div>
      color: <WithColorInfo />
    </div>
  </Scope>
</Form>;
```

<br/>
Remember that the result of high order components is affected just like `Text`
fields. In other words when you write `<Text field="color" />` within a
`<Scope scope="favorite" />` the result in the values is `favorite.color`.
Putting a component that is wrapped with `withFieldState` or `withFieldApi` is
affected in the exact same way!
