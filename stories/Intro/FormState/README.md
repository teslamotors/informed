## Form State

**"Ok so informed takes care of state so I dont have to.. but how do i get my hands
on this 'awesome stuff'??"**

Thats a great question! There are many ways so lets take a look at a few!

Below is the same example as above, except this time, we show you how to access
the form state and render out the values that are changing.

**
Note: for a full list of the available values within formState go to the
formState section of these docs
**

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form id="state-form">
  {({ formState }) => (
    <div>
      <label htmlFor="state-name">First name:</label>
      <Text field="name" id="state-name" />
      <button type="submit">Submit</button>
      <label>Values:</label>
      <code>{JSON.stringify(formState.values)}</code>
      <label>Touched:</label>
      <code>{JSON.stringify(formState.touched)}</code>
    </div>
  )}
</Form>;
```

---

### What is this magic?

Its not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)

There are three ways you can get access to `Informed`s form state.

1. By accessing the `formState` as a parameter to a child render function.

```jsx
<Form>
  {({ formState }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
</Form>
```

  <br/>
  2. By accessing the `formState` as a parameter to a render prop.

```jsx
<Form
  render={({ formState }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
/>
```

  <br/>
  2. By accessing the `formState` as a prop to a component prop.

```jsx
const FormContent = ({ formState }) => (
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
  </div>
);

<Form component={FormContent} />;
```

  <br/>
  So if you do need access to the form state, any of these methods will work.

---

### Ok so what if i need the state outside of the `<Form />` ??

Don't fret! This is also very simple. You have two options:

1. Use the Forms `onChange` prop.

```jsx
<Form onChange={formState => console.log(formState)}>
  <Text field="hello" />
  <button type="submit">Submit</button>
</Form>
```

  <br/>
  2. Use the Forms `getApi` prop, and then use the apis `getState` function.

```jsx
class MyAwesomeForm extends React.Component {
  constructor(props) {
    super(props);

    // Remember! This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  handleClick() {
    console.log(this.formApi.getState());
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  render() {
    return (
      <div>
        <Form getApi={this.setFormApi}>
          <Text field="hello" />
          <button type="submit">Submit</button>
        </Form>
        <button onClick={this.handleClick}>Print Form State</button>
      </div>
    );
  }
}
```

---

### Form Api ??

**Yes what a beautiful segue into the formApi!**

`Informed` also gives you access to a `formApi`. This api allows you to grab
and manipulate values using getters and setters. In the previous example, we
actually used a prop called `getApi` in order to getAccess to informed's api
externally. Then we used the `getState` function to log out the state when
our external button was clicked.

**
Note: for a full list of the available functions within formApi go to the
formApi section of these docs
**

There are three ways you can get access to `Informed`s form api.

1. By accessing the `formApi` as a parameter to a child render function.

```jsx
<Form>
  {({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
</Form>
```

  <br/>
  2. By accessing the `formApi` as a parameter to a render prop.

```jsx
<Form
  render={({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
/>
```

  <br/>
  2. By accessing the `formApi` as a prop to a component prop.

```jsx
const FormContent = ({ formApi }) => (
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
  </div>
);

<Form component={FormContent} />;
```

  <br/>
  So if you do need access to the form api, any of these methods will work.
