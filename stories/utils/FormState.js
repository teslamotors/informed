import React from 'react';
import Code from './Code';

import FormState from '../../src/components/FormState';

// import { useFormState } from '../../src';

// const FormState = ({ errors, step, noTouched }) => {
//   const formState = useFormState();
//   return (
//     <>
//       <label>Values:</label>
//       <Code language="language-js">
//         {JSON.stringify(formState.values, null, 2)}
//       </Code>

//       {!noTouched ? (
//         <>
//           <label>Touched:</label>
//           <Code language="language-js">
//             {JSON.stringify(formState.touched, null, 2)}
//           </Code>
//         </>
//       ) : null}
//       {errors ? (
//         <>
//           <label>Errors:</label>
//           <Code language="language-js">
//             {JSON.stringify(formState.errors, null, 2)}
//           </Code>
//         </>
//       ) : null}
//       {step ? (
//         <>
//           <label>Step:</label>
//           <Code language="language-js">{formState.step}</Code>
//         </>
//       ) : null}
//     </>
//   );
// };

export default FormState;
