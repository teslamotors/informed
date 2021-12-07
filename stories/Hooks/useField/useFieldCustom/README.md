# Use Field

Here we use the hook `useField` to create a custom text input. The idea is that you do this once
for a specific input type, then you simply start using your `<CustomTextInput />` throughout your code.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, useField, Debug } from 'informed';

const CustomTextInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    ...props
  });

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <input
      {...rest}
      ref={ref}
      value={!value && value !== 0 ? '' : value}
      onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
};

const FromScratch = () => (
  <div>
    <Form>
      <label>
        First name:
        <CustomTextInput field="name" />
      </label>
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  </div>
);
```
