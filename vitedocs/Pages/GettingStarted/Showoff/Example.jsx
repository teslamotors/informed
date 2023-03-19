// Example.jsx
import {
  Debug,
  Relevant,
  ArrayField,
  Scope,
  FormFields,
  utils
} from 'informed';
import { Form, Input, Select, Checkbox, Option, Button } from 'YourComponents';

/* ----------------- On Submit Gets Entire Form State ------------------ */
const onSubmit = ({ values }) => window.alert(`Hello ${values.name}`);

/* ------------------- Custom Field Level Validation ------------------- */
const validatePassword = (value, { password1, password2 }) => {
  if (password1 !== password2) return 'Passwords must match';
};

/* ----------------------- Intl Number Formatter ----------------------- */
const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Example = () => (
  /* -------------------- Form Level initialValues --------------------- */
  <Form
    onSubmit={onSubmit}
    initialValues={{ phone: '1234567899', salary: 80_000.25 }}>
    {/* ------------------ Built in validation props ------------------- */}
    <Input name="name" label="Name" required />

    {/* --------------- Override default error messages ---------------- */}
    <Input name="age" type="number" label="Age" required="Age Required" />

    {/* ----------------------- Format inputs -------------------------- */}
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Input name="salary" label="Salary" formatter={formatter} parser={parser} />

    {/* --------------------- Paried Validation ------------------------ */}
    <Input
      name="password1"
      label="Password"
      required
      minLength={8}
      validate={validatePassword}
      validateOn="change"
      showErrorIfError
      validateWhen={['password2']}
    />
    <Input
      name="password2"
      label="Confirm password"
      required
      minLength={8}
      validate={validatePassword}
      validateOn="change"
      showErrorIfError
      validateWhen={['password1']}
    />

    {/* ------------------ Field Level default value  ------------------- */}
    <Checkbox name="love" label="Do you love Tesla?" defaultValue={true} />

    {/* ------------------- Field Level initial value ------------------- */}
    <Select name="car" label="Car" initialValue="ms">
      <Option key="ms">Model S</Option>
      <Option key="m3">Model 3</Option>
      <Option key="mx">Model X</Option>
      <Option key="my">Model Y</Option>
    </Select>

    {/* --------------------------- Relevance --------------------------- */}
    <Checkbox name="married" label="Are you Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" required />
    </Relevant>

    {/* ---------------------------- Scope ------------------------------ */}
    <Scope scope="mother">
      <Input name="name" label="First name:" initialValue="Maye" />
      <Input name="name" label="Last name:" initialValue="Musk" />
      <Input name="age" label="Age:" type="number" initialValue={74} />
    </Scope>

    {/* ------------------------- Array Fields -------------------------- */}
    <br />
    <h3>Children</h3>
    <ArrayField
      name="children"
      initialValue={[
        {
          name: 'Jake',
          age: '18'
        },
        {
          name: 'Joy',
          age: '15'
        }
      ]}>
      {({ add }) => (
        <>
          <Button onClick={add} type="button" variant="accent" style="outline">
            Add
          </Button>
          <ArrayField.Items>
            {({ remove, name }) => (
              <>
                <Input name="name" label="Name" required />
                <Input name="age" label="Age" type="number" />

                {/* ----------------- Scoped Relevance ------------------ */}
                <Relevant
                  when={({ formApi, scope }) =>
                    formApi.getValue(`${scope}.age`) >= 16
                  }>
                  <Select name="car" label="What car do they drive?">
                    <Option key="ms">Model S</Option>
                    <Option key="m3">Model 3</Option>
                    <Option key="mx">Model X</Option>
                    <Option key="my">Model Y</Option>
                  </Select>
                </Relevant>
                <Button type="button" onClick={remove} variant="negative">
                  Remove
                </Button>
              </>
            )}
          </ArrayField.Items>
        </>
      )}
    </ArrayField>
    <br />

    {/* ------------------- JSON Schema Rendering -------------------- */}
    <FormFields
      schema={{
        type: 'object',
        properties: {
          bio: {
            type: 'string',
            title: 'Bio',
            'ui:control': 'textarea'
          },
          birthday: {
            type: 'text',
            title: 'Birthday',
            'ui:control': 'input',
            'ui:props': {
              type: 'date'
            }
          }
        }
      }}
    />

    {/* ------- Automaically calls onSubmit for submit button ---------- */}
    <Button type="submit" variant="accent" style="fill">
      Submit
    </Button>

    {/* ----------------------- Debug Component ------------------------- */}
    <Debug valid pristine dirty values errors />
  </Form>
);

export default Example;
