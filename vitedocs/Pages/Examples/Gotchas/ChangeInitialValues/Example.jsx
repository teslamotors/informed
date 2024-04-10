import { Input, Debug, Select } from 'informed';
import { Form, Button } from 'YourComponents';
import React, { useState, useEffect, useRef } from 'react';

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

const ProfileForm = ({ profile: initialValues }) => {
  // Ref to the form api
  const formApiRef = useRef();

  // Reset the form whenever initial values change ( happens when user selects profile )
  useEffect(
    () => {
      formApiRef.current.reset();
    },
    [initialValues]
  );

  return (
    // Remember to get access to the formApi and pass in the initial values
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <Input name="name" label="First Name" />
      <Input type="number" name="age" label="Age" />
      <Button type="submit">submit</Button>
      <Debug values />
    </Form>
  );
};

export default function Profiles() {
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
      <ProfileForm profile={selectedProfile} />
    </React.Fragment>
  );
}
