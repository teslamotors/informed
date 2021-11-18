# Changing initialValues

<br/>

Commonly you will have use cases where you want the values to change when the users has made a different selection.

Below we have example where there is a profile editor. Depending on which profile you would like to edit, you want to pre populate the profile form with that users profile information.

<!-- STORY -->

#### Code:

```jsx
import React, { useState, useEffect, useRef } from 'react';
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
      <button type="submit">submit</button>
      <Debug values />
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
      <ProfileForm profile={selectedProfile} />
    </React.Fragment>
  );
};
```
