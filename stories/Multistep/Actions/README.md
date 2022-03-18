# Multistep Forms

Somtimes you need to take actions when moving from step A to B.

<!-- STORY -->

```jsx
import {
  Form,
  Input,
  Multistep,
  Checkbox,
  Debug,
  useMultistepApi
} from 'informed';

const Info = () => {
  const { next } = useMultistepApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const doSomething = ({ values }) => {
    const { first } = values;
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        // Simulate username check
        if (['joe', 'tanner', 'billy', 'bob'].includes(first)) {
          setLoading(false);
          const error = 'That name is taken';
          setError(error);
          return reject(error);
        }
        // Simulate request faulure
        if (first === 'reject') {
          setLoading(false);
          const error = 'Unable to validate name.';
          setError(error);
          return reject(new Error(error));
        }
        setLoading(false);
        setError();
        return resolve();
      }, 2000);
    });
  };

  return (
    <Multistep.Step step="info">
      <Input
        name="first"
        label="First Name"
        required
        // asyncValidate={asyncValidate}
      />
      <Input name="last" label="First Name" required />
      <button type="button" onClick={() => next(doSomething)}>
        Next
      </button>
      {loading ? <div className="loader">Loading...</div> : null}
      {error ? <div style={{ color: 'red' }}>Error: {error}</div> : null}
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off">
      <Multistep>
        <Info />
        <Favorite />
        <Additional />
      </Multistep>
      <Debug />
    </Form>
  );
};
```
