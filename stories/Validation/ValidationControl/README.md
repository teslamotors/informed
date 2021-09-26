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
import { Form, Text } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
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
```
