import { Debug, DebugField } from 'informed';
import { Form, Input, Button } from 'YourComponents';

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

const Example = () => {
  return (
    <Form onSubmit={({ values }) => window.alert(JSON.stringify(values))}>
      <Input
        name="username"
        label="Username"
        required
        asyncValidate={asyncValidate}
      />
      <Button type="submit">Submit</Button>
      <DebugField name="username" value valid error validating />
      <Debug values valid errors validating />
    </Form>
  );
};

export default Example;
