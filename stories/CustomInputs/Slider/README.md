## Endless Possibilities

Because of this design, you can add your very own custom inputs! Below is an example of a slider!

<!-- STORY -->

```jsx
import { Form, useField, Debug } from 'informed';

const Slider = ({ min, max, step, ...props }) => {
  const { render, fieldState, fieldApi, ref, userProps } = useField({
    ...props
  });
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  return render(
    <>
      <label htmlFor={userProps.id}>Range:</label>
      <input
        {...userProps}
        type="range"
        min={min}
        max={max}
        step={step}
        ref={ref}
        value={value || '0'}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
      />
    </>
  );
};

const SliderExample = () => (
  <Form>
    <React.Fragment>
      <Slider field="range" initialValue="69" min="0" max="100" />
      <button type="submit">Submit</button>
      <Debug values />
    </React.Fragment>
  </Form>
);
```
