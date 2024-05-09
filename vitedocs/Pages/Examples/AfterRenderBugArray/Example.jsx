import { Relevant, Debug, Select, ArrayField } from 'informed';
import { Form, Input, Checkbox } from 'Components';
import { useEffect, useRef, useState } from 'react';

const validate = (value, values, { formApi, scope, name }) => {
  const vals = formApi.getValue(`${scope}`);
  console.log('B VALUE:', vals?.b);
  if (!vals?.b) return 'A needs B';
};

const profiles = [
  // This should NOT error on selection as its valid
  {
    name: 'Profile1',
    stuff: [
      {
        a: 'Hello1',
        b: 'World'
      }
    ]
  },
  // This should NOT error on selection as its valid... but will because of bug
  {
    name: 'Profile2',
    stuff: [
      {
        a: 'Hello2',
        b: 'Elon'
      }
    ]
  },
  // This actually should error on selection
  {
    name: 'Profile3',
    stuff: [
      {
        a: 'Hello3',
        b: undefined
      }
    ]
  }
];

const ProfileForm = ({ profile: initialValues }) => {
  // Ref to the form api
  const formApiRef = useRef();

  // Reset the form whenever initial values change ( happens when user selects profile )
  useEffect(
    () => {
      if (!formApiRef.current.getFormState().pristine) {
        formApiRef.current.reset();
      }
    },
    [initialValues]
  );

  return (
    // Remember to get access to the formApi and pass in the initial values
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <ArrayField name="stuff">
        {() => {
          return (
            <ArrayField.Items>
              {({ name }) => (
                <>
                  <h4>{name}</h4>
                  {/* --------- Field A has validation that depends on B -------- */}
                  <Input
                    name="a"
                    label="A"
                    validate={validate}
                    validateOnMount
                    showErrorIfError
                    validateWhen={['b']}
                  />
                  {/* ----- Field B effects A's validation ------ */}
                  <Input name="b" label="B" />
                  {/* </Relevant> */}
                </>
              )}
            </ArrayField.Items>
          );
        }}
      </ArrayField>

      {/* ---------- Debug the form state ----------- */}
      <Debug values />
    </Form>
  );
};

const Example = () => {
  // Select the first profile by default
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const selectProfile = ({ value }) => setSelectedProfile(profiles[value]);

  return (
    <Form>
      {/* A rare case where we want to track the value outside the form */}
      <Select name="profile" label="Profile" onValueChange={selectProfile}>
        {profiles.map((profile, i) => (
          <option value={i}>{profile.name}</option>
        ))}
      </Select>
      <ProfileForm profile={selectedProfile} />
    </Form>
  );
};

export default Example;
