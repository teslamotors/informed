import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, RadioGroup, Radio, useFieldState } from '../../../src';

// const DynamicFields = () => (
//   <div>
//     <Form>
//       {({ formState }) => (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           <div style={{ flex: 1, marginRight: '2rem' }}>
//             <label>First name:<Text field="name"/></label>
//             <label>Are you married?</label>
//             <RadioGroup field="married">
//               <label>Yes <Radio value="yes"/></label>
//               <label>No <Radio value="no"/></label>
//             </RadioGroup>
//             {formState.values.married === 'yes' ? (
//               <label >Spouse name:<Text field="spouse" /></label>
//             ) : null}
//             <button type="submit">Submit</button>
//           </div>
//           <div style={{ flex: 2, minWidth: '300px' }}>
//             <FormState />
//           </div>
//         </div>
//       )}
//     </Form>
//   </div>
// );

const Spouse = () => {
  const { value: married } = useFieldState('married'); 
  return married === 'yes' ? <label >Spouse name:<Text field="spouse" /></label> : null;
};

const DynamicFields = () => (
  <div>
    <Form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>First name:<Text field="name"/></label>
          <label>Are you married?</label>
          <RadioGroup field="married">
            <label>Yes <Radio value="yes"/></label>
            <label>No <Radio value="no"/></label>
          </RadioGroup>
          <Spouse />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, DynamicFields);
