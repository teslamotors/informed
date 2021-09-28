import React from 'react';
import { ArrayField as InformedArrayField } from '../ArrayField';
// import { FormComponents } from '../FormComponents';
import { FormFields } from '../FormFields';

// const ArrayField = ({ field, items, uiBefore, uiAfter, ...props }) => {
const ArrayField = ({ field, items, ...props }) => {
  return (
    <InformedArrayField field={field} {...props}>
      {/* <FormComponents components={uiBefore} /> */}
      <InformedArrayField.Items>
        {() => (
          <React.Fragment>
            {/* <FormComponents components={items['ui:before']} /> */}
            <FormFields schema={items} />
            {/* <FormComponents components={items['ui:after']} /> */}
          </React.Fragment>
        )}
      </InformedArrayField.Items>
      {/* <FormComponents components={uiAfter} /> */}
    </InformedArrayField>
  );
};

export { ArrayField };
