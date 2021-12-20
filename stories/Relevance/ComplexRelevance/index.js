import React, { useState, useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, Checkbox } from '../../../src';

// A custom input with a render counter
// const Input = props => {
//   const count = useRef(1);

//   const { render, informed, userProps, fieldState, ref } = useField({
//     type: 'text',
//     ...props
//   });
//   const { label, id, ...rest } = userProps;
//   return render(
//     <>
//       <label htmlFor={id}>
//         {label} - <strong>rendered {count.current} times</strong>
//       </label>
//       <input id={id} ref={ref} {...informed} {...rest} />
//     </>
//   );
// };

const RelevantComp = () => {
  const [call1, setCall1] = useState(0);
  const [call2, setCall2] = useState(0);

  const relevant1 = ({ formState }) => {
    setCall1(prev => prev + 1);
    return formState.values.showInfo;
  };

  const relevant2 = ({ formState }) => {
    setCall2(prev => prev + 1);
    return formState.values.showInfo;
  };

  return (
    <Form autoComplete="off">
      <strong>relevant1 called {call1} times</strong>
      <br />
      <br />
      <strong>relevant2 called {call2} times</strong>
      <br />
      <br />
      <Checkbox label="Show Info?" name="showInfo" />
      <Input
        label="Favorite Food"
        name="food"
        relevanceWhen={['showInfo']}
        relevant={relevant1}
      />
      <Input label="Favorite Movie" name="movie" relevant={relevant2} />
      <Debug values />
    </Form>
  );
};

export default withDocs(readme, RelevantComp);
