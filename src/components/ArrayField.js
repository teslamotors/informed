import React, { useState } from 'react';

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const ArrayField = ({ field, children }) => {
  const [keys, setKeys] = useState([]);

  const remove = i => {
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
  };

  const add = () => {
    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const fields = keys.map((key, i) => ({
    key,
    field: `field[${i}]`,
    remove: () => remove(i)
  }));

  return children({ fields, add });
};

export default ArrayField;
