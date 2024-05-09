import { Relevant, Debug, Select } from 'informed';
import { Form, Input, Checkbox } from 'Components';
import { useEffect, useRef, useState } from 'react';

const validate = (value, values) => {
  console.log('B Value', values.b);
  if (values.b === 'Elon') return 'Cant Equal Elon!';
  if (values.b === 'World') return 'Cant Equal World!';
};

const profiles = [
  {
    a: 'Hello1',
    b: 'World',
    show: true
  },
  {
    a: 'Hello2',
    b: 'Elon',
    show: true
  }
];

const ProfileForm = ({ profile: initialValues }) => {
  // Ref to the form api
  const formApiRef = useRef();

  // Reset the form whenever initial values change ( happens when user selects profile )
  useEffect(
    () => {
      // We check this because internally informed will reset by default if you change initialValues on pristine form
      if (!formApiRef.current.getFormState().pristine) {
        formApiRef.current.reset();
      }
    },
    [initialValues]
  );

  return (
    // Remember to get access to the formApi and pass in the initial values
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      {/* --------- Field A has validation that depends on B -------- */}
      <Input
        name="a"
        label="A"
        validate={validate}
        validateOnMount
        showErrorIfError
        // validateWhen={['b']}
      />
      {/* ----- Field B effects A's validation ------ */}
      <Input name="b" label="B" />
      {/* ---------- Debug the form state ----------- */}
      <Debug values modified />
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
          <option value={i}>{profile.a}</option>
        ))}
      </Select>
      <ProfileForm profile={selectedProfile} />
    </Form>
  );
};

export default Example;
