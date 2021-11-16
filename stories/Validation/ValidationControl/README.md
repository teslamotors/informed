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

<br />

Validation is controlled via the `validateOn` prop, but in order to control when it shows,
use the `showErrorIfError` and `showErrorIfDirty` props. **This is because sometimes you may want the form to be invalid but not show the error to the user yet ( default is `showErrorIfTouched` )**

| prop               | description                                                                                                  | default |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| showErrorIfError   | will set `showError` for that field to true whenever there is an error (typically used with validateOnMount) |         |
| showErrorIfTouched | will set `showError` for that field to true whenever there is an error and the field is touched              | x       |
| showErrorIfDirty   | will set `showError` for that field to true whenever there is an error and the field is dirty                |         |

<br />

Finally we have a use case for validating right away ( on mount )

| prop            | description                     | default |
| --------------- | ------------------------------- | ------- |
| validateOnMount | will trigger validation onMount | false   |

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
    <Form autocomplete="off">
      <h4>validateOn="blur" ( default )</h4>
      <Input
        name="username1"
        label="Username1"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change"</h4>
      <Input
        name="username2"
        label="Username2"
        validateOn="change"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change" && showErrorIfDirty</h4>
      <Input
        name="username3"
        label="Username3"
        validateOn="change"
        showErrorIfDirty
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change-blur"</h4>
      <Input
        name="username4"
        label="Username4"
        validateOn="change-blur"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="change-submit"</h4>
      <Input
        name="username5"
        label="Username5"
        validateOn="change-submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="blur-submit"</h4>
      <Input
        name="username6"
        label="Username6"
        validateOn="blur-submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOn="submit"</h4>
      <Input
        name="username7"
        label="Username7"
        validateOn="submit"
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOnMount</h4>
      <Input
        name="username8"
        label="Username8"
        validateOnMount
        required
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <h4>validateOnMount && showErrorIfError</h4>
      <Input
        name="username9"
        label="Username9"
        validateOnMount
        showErrorIfError
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
