# Validation Control

By default fields will only validate on blur. To get
more granular validation, simply pass in `validateOn` props.

See table below for mapping:

<br />

| validateOn    | derived       | change       | blur         | submit       | default |
| ------------- | ------------- | ------------ | ------------ | ------------ | ------- |
| change        | change-change | sync + async | sync + async | sync + async |         |
| blur          | blur-blur     | x            | sync + async | sync + async | x       |
| change-blur   | change-blur   | sync         | sync + async | sync + async |         |
| change-submit | change-submit | sync         | sync         | sync + async |         |
| blur-submit   | submit-submit | x            | sync         | sync + async |         |
| submit        | submit-submit | x            | x            | sync + async |         |

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joseph', 'tanner', 'billy', 'bobby'].includes(username)) {
        return resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

const ValidationControl = () => (
  <div>
    <Form id="validate-control-form">
      <h4>validateOn="blur" ( default )</h4>
      <Input
        name="username1"
        label="Username"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change"</h4>
      <Input
        name="username2"
        label="Username"
        validateOn="change"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change-blur"</h4>
      <Input
        name="username3"
        label="Username"
        validateOn="change-blur"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change-submit"</h4>
      <Input
        name="username4"
        label="Username"
        validateOn="change-submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="blur-submit"</h4>
      <Input
        name="username5"
        label="Username"
        validateOn="blur-submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="submit"</h4>
      <Input
        name="username6"
        label="Username"
        validateOn="submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <button type="submit">Submit</button>
      <Debug values errors invalid validating />
    </Form>
  </div>
);
```
