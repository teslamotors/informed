### Form Api ??

**Yes what a beautiful segue into the formApi!**

`Informed` also gives you access to a `formApi`. This api allows you to grab
and manipulate values using getters and setters. In the previous example, we
actually used a prop called `getApi` in order to getAccess to informed's api
externally. Then we used the `getState` function to log out the state when
our external button was clicked.

Below is an example where you can access the formApi via hooks. Then use it
to change the value of the field when the random button is clicked!

**
Note: for a full list of the available functions within formApi go to the
formApi section of these docs
**

<!-- STORY -->

```jsx
import { Form, Text, useFormApi } from 'informed';

const RandomSetterButton = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={()=>
      formApi.setValue(
        'name', 
        Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
      Random
    </button>
  );
};

<Form>
  <label>Name:<Text field="name"/></label>
  <button type="submit">Submit</button>
  <RandomSetterButton />
</Form>;
```

There are three ways you can get access to `Informed`s form api.

1) By accessing the `formApi` as a parameter to a child render function.

```jsx
<Form>
  {({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="button" onClick={()=>formApi.setValue('hello', 'world!')}/>
      <button type="submit">Submit</button>
    </div>
  )}
</Form>
```

<br/>
2) By accessing the `formApi` as a parameter to a render prop.

```jsx
<Form
  render={({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="button" onClick={()=>formApi.setValue('hello', 'world!')}/>
      <button type="submit">Submit</button>
    </div>
  )}
/>
```

<br/>
3) By accessing the `formApi` as a prop to a component prop.

```jsx
const FormContent = ({ formApi }) => (
  <div>
    <Text field="hello" />
    <button type="button" onClick={()=>formApi.setValue('hello', 'world!')}/>
    <button type="submit">Submit</button>
  </div>
);

<Form component={FormContent} />;
```

<br/>
4) By accessing the `formApi` as a prop via a HOC ( High Order Component ).

```jsx
const ComponentWithFormApi = withFormApi(({ formApi }) => (
  return <button type="button" onClick={()=>formApi.setValue('hello', 'world!')}/>
));

<Form>
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
    <ComponentWithFormApi />
  </div>
</Form>
```

<br/>
5) By accessing the `formApi` via Hooks!

```jsx
const ComponentWithFormApi = () => {
  const formApi = useFormApi();
  return <button type="button" onClick={()=>formApi.setValue('hello', 'world!')}/>
};

<Form>
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
    <ComponentWithFormApi />
  </div>
</Form>
```

<br/>
So if you do need access to the form api, any of these methods will work.
