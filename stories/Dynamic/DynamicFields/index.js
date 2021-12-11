import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  RadioGroup,
  Radio,
  Relevant,
  Debug,
  ArrayField,
  Scope
} from '../../../src';

// const DynamicFields = () => (
//   <div>
//     <Form>
//       {({ formState }) => (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           <div style={{ flex: 1, marginRight: '2rem' }}>
//             <label>First name:<Input name="name"/></label>
//             <label>Are you married?</label>
//             <RadioGroup name="married">
//               <label>Yes <Radio value="yes"/></label>
//               <label>No <Radio value="no"/></label>
//             </RadioGroup>
//             {formState.values.married === 'yes' ? (
//               <label >Spouse name:<Input name="spouse" /></label>
//             ) : null}
//             <button type="submit">Submit</button>
//           </div>
//           <div style={{ flex: 2, minWidth: '300px' }}>
//             <Debug />
//           </div>
//         </div>
//       )}
//     </Form>
//   </div>
// );

const initialValues = { person: { spouse: 'Shannon' } };

const DynamicFields = () => (
  <div>
    <Form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          {/* <Scope scope="person"> */}
          <Input name="name" label="First name:" />
          <label>Are you married?</label>
          <RadioGroup name="married">
            <label>
              Yes <Radio value="yes" />
            </label>
            <label>
              No <Radio value="no" />
            </label>
          </RadioGroup>
          <Relevant
            // relevanceWhen={['married']}
            when={({ formState }) => formState.values?.married === 'yes'}>
            <Input
              name="spouse"
              label="Spouse name:"
              // required
              // validateOnMount
              // showErrorIfError
              // relevanceWhen={['married']}
              // relevant={({ formState }) => formState.values?.married === 'yes'}
            />

            {/* <h5>Siblings:</h5>
            <ArrayField
              name="siblings"
              keepState
              initialValue={[
                { first: 'Foo', last: 'ahh' },
                { first: 'Bar', last: 'last' }
              ]}>
              {({ add, reset }) => (
                <>
                  <button type="button" onClick={add}>
                    Add Sibling
                  </button>
                  <button type="button" onClick={reset}>
                    Reset Siblings
                  </button>
                  <ArrayField.Items>
                    {({ remove, field, index }) => (
                      <label>
                        Sibling {index}:
                        <Input name={`${field}.first`} keepState />
                        Sibling {index}:
                        <Input name={`${field}.last`} keepState />
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                      </label>
                    )}
                  </ArrayField.Items>
                </>
              )}
            </ArrayField> */}
          </Relevant>
          <button type="submit">Submit</button>
          {/* </Scope> */}
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <Debug />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, DynamicFields);
