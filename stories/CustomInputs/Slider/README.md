## Endless Possibilities

Because of this design, you can add your very own custom inputs! Below is an example of a slider!

<!-- STORY -->

```jsx
import { Form, asField } from 'informed';

const Slider = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <input
      {...rest}
      type="range"
      min={0}
      max={100}
      step={5}
      ref={forwardedRef}
      value={value || initialValue || '0'}
      onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});

<Form id="custom-form">
  <label htmlFor="custom-range">Range:</label>
  <Slider field="range" id="custom-range" initialValue={50} />
  <button type="submit">Submit</button>
</Form>;
```
