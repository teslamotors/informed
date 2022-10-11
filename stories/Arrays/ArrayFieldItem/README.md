# Array Field Item

<br />

Informed gives you access to two components for array fields:

```jsx
<ArrayField>
<ArrayField.Items>
```

<br />

There are many cool features these give you:

## ArrayFieldApi

```jsx
<ArrayField name="friends">
  {({ add, reset, swap, addWithInitialValue }) => <></>}
</ArrayField>
```

<br />

| Function            | Example                               | Description                           |
| ------------------- | ------------------------------------- | ------------------------------------- |
| add                 | add()                                 | Adds a new item                       |
| remove              | remove(1)                             | Removes item at index                 |
| reset               | reset()                               | Resets the array field                |
| swap                | swap(1,2)                             | Swaps two array fields                |
| addWithInitialValue | addWithInitialValue({ name: 'test' }) | Adds a new item with an initial value |

## ArrayFieldItemApi

```jsx
<ArrayField.Items>{({ remove, reset, setValue }) => <></>}</ArrayField.Items>
```

<br />

| Function   | Example                 | Description                                   |
| ---------- | ----------------------- | --------------------------------------------- |
| remove     | remove()                | removes this item                             |
| reset      | reset()                 | Resets all field within this item             |
| setValue   | setValue('name', 'Joe') | Sets the value for the field within this item |
| resetField | resetField('name')      | Resets the given field within this item       |

## ArrayFieldItemInfo

```jsx
<ArrayField.Items>{({ name, index }) => <></>}</ArrayField.Items>
```

<br />

| Name  | Example      | Description                  |
| ----- | ------------ | ---------------------------- |
| name  | "friends[0]" | the field name for this item |
| index | 0            | the index for this item      |

## ArrayFieldItemState

##### Usage

```js
const {
  key,
  name,
  index,
  parent,
  values,
  errors,
  touched,
  initialValue
} = useArrayFieldItemState();
```

##### Example

```json
{
  "key": "d9f97dee-7c39-4bce-a348-a404e75417a6",
  "name": "friends[0]",
  "index": 0,
  "parent": "friends",
  "values": {
    "age": 27
  },
  "errors": {
    "name": "This field is required"
  },
  "touched": true,
  "initialValue": {
    "name": "Joe",
    "age": 27
  }
}
```

<br />

| Name         | Example                    | Description                                                   |
| ------------ | -------------------------- | ------------------------------------------------------------- |
| name         | "friends[0]"               | the field name for this item                                  |
| index        | 0                          | the index for this item                                       |
| key          | "d9f97dee..."              | a unique identifier for this field ( used mostly internally ) |
| parent       | "friends"                  | parent name "friends[0]" parent is "friends"                  |
| values       | { age: 27 }                | the values within this item                                   |
| errors       | { name: "Required Field" } | the errors within this item                                   |
| touched      | true                       | if a field within this item has been touched                  |
| initialValue | { name: "Joe", age: 27}    | the initial value for this item                               |

## Example:

For each feature a visualization will be shown based on this example array:

```
[ { a, b }, { a, b }, { a, b } ]
```

<br />

An example state for this array looks like

```js
[{ a: 'Hello', b: 'World' }, { a: 'Hi', b: 'US' }, { a: 'Yoo', b: 'Bro' }];
```

<br />

| Scenario                                                         | Visualization                        | How                                       |
| ---------------------------------------------------------------- | ------------------------------------ | ----------------------------------------- |
| I want to reset the **b** field for the second item              | [ { a, b }, { a, **b** }, { a, b } ] | `arrayFieldItemApi.resetField('b')`       |
| I want to set the **a** fields value for the second item to "Yo" | [ { a, b }, { **a**, b }, { a, b } ] | `arrayFieldItemApi.setValue('a', 'Yo')`   |
| I want to remove the the second item                             | [ { a, b }, **{ a, b }**, { a, b } ] | `arrayFieldItemApi.remove()`              |
| I want to reset the the second item                              | [ { a, b }, **{ a, b }**, { a, b } ] | `arrayFieldItemApi.reset()`               |
| I want to add a new item                                         | [ { a, b }, { a, b }, **{ a, b }** ] | `arrayFieldApi.add()`                     |
| I want to add a new item with the name "Foo"                     | [ { a, b }, { a, b }, **{ a, b }** ] | `arrayFieldApi.addWithInitialValue({..})` |
| I want to reset the whole array field                            | **[ { a, b }, { a, b }, { a, b } ]** | `arrayFieldApi.reset()`                   |

<!-- STORY -->

```jsx
import { Form, Input, ArrayField, useArrayFieldItemState } from 'informed';

const initialValues = {
  friends: [
    {
      name: 'Joe',
      age: '20'
    },
    {
      name: 'Jane',
      age: '20'
    }
  ]
};

const FieldState = () => {
  const { values } = useArrayFieldItemState();
  return (
    <pre>
      <code>{JSON.stringify(values, null, 2)}</code>
    </pre>
  );
};

const NestedForm = () => {
  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField name="friends">
          {({ add, reset }) => (
            <>
              <button
                onClick={() => {
                  reset();
                }}
                type="button">
                Reset
              </button>
              <button
                onClick={() => {
                  add();
                }}
                type="button">
                Add
              </button>

              <button
                onClick={() => {
                  addWithInitialValue({ name: 'test' });
                }}>
                Add with initialValue
              </button>

              <button
                onClick={() => {
                  formApi.setValue('friends[0].name', 'Test');
                }}
                type="button">
                set friends[0].name to test
              </button>

              <ArrayField.Items>
                {({ remove, name, reset, resetField, setValue }) => (
                  <>
                    <h5>{name}</h5>
                    <Input name="name" label="Name" required />
                    <Input name="age" label="Age" type="number" />
                    <button type="button" onClick={reset}>
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue('name', 'Elon')}>
                      Set Name to "Elon"
                    </button>
                    <button type="button" onClick={() => resetField('name')}>
                      Reset Name
                    </button>
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                    <FieldState />
                  </>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```
