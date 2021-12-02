import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { MultistepStepContext } from '../../../src/Context';

import {
  Form,
  Input,
  Checkbox,
  Relevant,
  ArrayField,
  useFormApi,
  useFieldState,
  FormStateAccessor,
  Debug
} from '../../../src';

const initialValues = {
  last: 'Puzzo',
  baz: 'BAZ',
  friends: [
    {
      first: 'Joe',
      last: 'Puzzo'
    },
    {
      first: 'Jill',
      last: 'Jillberg'
    },
    {
      first: 'Jane',
      last: 'Janney'
    }
  ]
};

const Reset = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={formApi.reset}>
      Reset Form
    </button>
  );
};

const formatter = [
  '+',
  '1',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

const mask = value => value.toUpperCase();

const onSubmit = ({ values }) => console.log(values);

const validateLength = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const validateFields = values => {
  return {
    foo: validateLength(values.foo),
    bar: validateLength(values.bar),
    baz: validateLength(values.baz),
    friends: [
      {
        first: validateLength(values.friends[0].first)
      },
      {
        first: validateLength(values.friends[1].first)
      }
    ]
  };
};

const FieldState = ({ name }) => {
  const fieldState = useFieldState(name);
  return (
    <>
      <h5>Component using fieldState: {name}</h5>
      Render: {Math.random()}
      <pre>
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

const FeatureTester = () => {
  const [step, setStep] = useState(1);

  const onReset = state => {
    console.log('RESET', state);
  };

  const onChange = state => {
    console.log('CHANGE', state);
  };

  const onSubmitFailure = state => {
    console.log('FAILURE', state);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        // onChange={onChange}
        autocomplete="off"
        onReset={onReset}
        onSubmitFailure={onSubmitFailure}
        initialValues={initialValues}
        validateFields={validateFields}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Reset />
            <FormStateAccessor>
              {({ submitted }) => (
                <>
                  <button type="submit">
                    Submit {submitted ? '( Been Submitted )' : ''}
                  </button>
                </>
              )}
            </FormStateAccessor>
            {/* ----------------------------------------------------------- */}
            <hr />
            <h3>Masking Test</h3>
            <Input
              name="phone"
              formatter={formatter}
              parser={parser}
              maintainCursor
              initialValue="1231231234"
              debug
            />
            <Input
              name="uppercase"
              formatter={[
                mask,
                mask,
                '-',
                mask,
                mask,
                '-',
                mask,
                mask,
                mask,
                mask
              ]}
              maintainCursor
              initialValue="abcdefgh"
              debug
            />
            {/* ----------------------------------------------------------- */}
            <hr />
            <h3>Normal Form Test</h3>
            <Input label="First Name" name="first" initialValue="Joe" debug />
            <Input
              label="Last Name"
              name="last"
              debug
              validate={v => (v === 'Puzzo' ? 'Ahhhh' : undefined)}
            />
            <Input label="Foo" name="foo" defaultValue="foo" debug />
            <Input
              label="Bar"
              name="bar"
              initialValue="BAR"
              defaultValue="bar"
              debug
            />
            <Input label="Baz" name="baz" defaultValue="bar" debug />
            {/* ----------------------------------------------------------- */}
            <hr />
            <h3>Relevant Test</h3>
            <Checkbox label="Show Info?" name="showInfo" debug />
            <Relevant when={({ formState }) => formState.values.showInfo}>
              <Input type="number" label="Age" name="age" debug />
              <Input label="Favorite Color" name="color" keepState debug />
            </Relevant>
            <Input
              label="Favorite Food"
              name="food"
              debug
              relevanceWhen={['showInfo']}
              relevant={({ formState }) => formState.values.showInfo}
            />
            <Input
              label="Favorite Animal"
              name="animal"
              keepState
              debug
              relevanceWhen={['showInfo']}
              relevant={({ formState }) => formState.values.showInfo}
            />
            {/* ----------------------------------------------------------- */}
            <hr />
            <h3>Multistep Test</h3>
            <MultistepStepContext.Provider value={step}>
              <button type="button" onClick={() => setStep(1)}>
                Step1
              </button>
              <button type="button" onClick={() => setStep(2)}>
                Step2
              </button>
              {step === 1 ? (
                <>
                  <Checkbox label="Show Info?" name="multi.showInfo" debug />
                  <Relevant
                    when={({ formState }) => formState.values.multi?.showInfo}>
                    <Input
                      type="number"
                      label="Age []"
                      name="multi.age"
                      debug
                    />
                    <Input
                      label="Favorite Color [keepState]"
                      name="multi.color"
                      keepState
                      debug
                    />
                  </Relevant>
                  <Input
                    label="Favorite Food []"
                    name="multi.food"
                    debug
                    relevanceWhen={['showInfo']}
                    relevant={({ formState }) =>
                      formState.values.multi?.showInfo
                    }
                  />
                  <Input
                    label="Favorite Animal [keepState]"
                    name="multi.animal"
                    keepState
                    debug
                    relevanceWhen={['showInfo']}
                    relevant={({ formState }) =>
                      formState.values.multi?.showInfo
                    }
                  />
                </>
              ) : null}
              {step === 2 ? (
                <>
                  <Input
                    label="First Name"
                    name="multi.first"
                    initialValue="Joe"
                    debug
                  />
                  <Input label="Last Name" name="multi.last" debug />
                </>
              ) : null}
            </MultistepStepContext.Provider>
            {/* ----------------------------------------------------------- */}
            <hr />
            <h3>Array Test</h3>
            <Checkbox
              label="Show Friends?"
              name="showFriends"
              initialValue
              debug
            />
            <h5>Friends:</h5>
            <ArrayField
              name="friends"
              relevant={({ formState }) => formState.values.showFriends}>
              {({ add, addWithInitialValue, swap, reset }) => (
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
                      swap(0, 1);
                    }}
                    type="button">
                    Swap
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      addWithInitialValue({ name: 'test' });
                    }}>
                    Add with initialValue
                  </button>

                  <ArrayField.Items>
                    {({ remove, name }) => (
                      <label>
                        {console.log('RENDER')}
                        <h5>{name}</h5>
                        <Input
                          label="First [ keepState ]"
                          name="first"
                          keepState
                          debug
                        />
                        <Input
                          label="Last [ keepState ]"
                          name="last"
                          debug
                          keepState
                          initialValue={`bob-${name}`}
                        />
                        <Input
                          label="Foo [ ]"
                          name="foo"
                          debug
                          initialValue={`foo-${name}`}
                        />
                        <Checkbox label="Show Info?" name="showInfo" debug />
                        <Relevant
                          when={({ formApi, scope }) =>
                            formApi.getValue(`${scope}.showInfo`)
                          }>
                          <Input type="number" label="Age" name="age" debug />
                          <Input
                            label="Favorite Color"
                            name="color"
                            keepState
                            debug
                          />
                        </Relevant>
                        <Input
                          label="Favorite Food"
                          name="food"
                          debug
                          relevanceWhen={['showInfo']}
                          relevant={({ formApi, scope }) =>
                            formApi.getValue(`${scope}.showInfo`)
                          }
                        />
                        <FieldState name={name} />
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                        {/* <pre>
                      <code>{JSON.stringify(values, null, 2)}</code>
                    </pre> */}
                      </label>
                    )}
                  </ArrayField.Items>
                </>
              )}
            </ArrayField>
          </div>
          <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
            <Debug />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, FeatureTester);
