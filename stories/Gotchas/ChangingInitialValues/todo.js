import React, { useState, useEffect, useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Select, Debug } from '../../../src';

// Use your imagination and pretend these came from an api call :)
const profiles = [
  {
    name: 'Joe',
    age: 25
  },
  {
    name: 'Kimbal',
    age: 47
  },
  {
    name: 'Elon',
    age: 48
  }
];

const ProfileForm1 = ({ profile: initialValues }) => {
  return (
    <Form initialValues={initialValues}>
      <Input name="name" label="First Name" />
      <Input type="number" name="age" label="Age" />
      <button type="submit">submit</button>
      <Debug values initialValues dirty />
    </Form>
  );
};

const ProfileForm2 = ({ profile: initialValues }) => {
  return (
    <Form>
      <Input name="name" label="First Name" initialValue={initialValues.name} />
      <Input
        type="number"
        name="age"
        label="Age"
        initialValue={initialValues.age}
      />
      <button type="submit">submit</button>
      <Debug values initialValues dirty />
    </Form>
  );
};

const ProfileForm3 = ({ profile: defaultValues }) => {
  return (
    <Form>
      <Input name="name" label="First Name" defaultValue={defaultValues.name} />
      <Input
        type="number"
        name="age"
        label="Age"
        defaultValue={defaultValues.age}
      />
      <button type="submit">submit</button>
      <Debug values initialValues dirty />
    </Form>
  );
};

const ProfileForm4 = ({ profile: initialValues }) => {
  // Need this so we can reset
  const formApiRef = useRef();

  // Reset the form whenever initial values change ( happens when user selects profile ) we need to reset if we are not pristine
  useEffect(
    () => {
      formApiRef.current.reset();
    },
    [initialValues]
  );

  // Deliberately make it dirty
  useEffect(() => {
    formApiRef.current.setValue('name', 'Dirty');
  }, []);

  return (
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <Input name="name" label="First Name" />
      <Input type="number" name="age" label="Age" />
      <button type="submit">submit</button>
      <Debug values initialValues dirty />
    </Form>
  );
};

const Profiles = () => {
  // Select the first profile by default
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const selectProfile = ({ value }) => setSelectedProfile(profiles[value]);

  return (
    <React.Fragment>
      <h2>Select Profile</h2>
      <Form>
        {/* A rare case where we want to track the value instead of rcf ( onChange ) */}
        <Select name="profile" label="Profile" onChange={selectProfile}>
          {profiles.map((profile, i) => (
            <option value={i}>{profile.name}</option>
          ))}
        </Select>
      </Form>
      <h2>Edit {selectedProfile.name}</h2>
      <ProfileForm1 profile={selectedProfile} />
      <ProfileForm2 profile={selectedProfile} />
      <ProfileForm3 profile={selectedProfile} />
      <ProfileForm4 profile={selectedProfile} />
    </React.Fragment>
  );
};

export default withDocs(readme, Profiles);
