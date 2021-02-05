import React from 'react';
import InformedArrayField from '../ArrayField';
import FormComponents from '../FormComponents';
import FormFields from '../FormFields';

const ArrayField = ({ field, items, uiBefore, uiAfter, ...props }) => {
  return (
    <InformedArrayField field={field} {...props}>
      <FormComponents components={uiBefore} />
      <InformedArrayField.Items>
        {({ field }) => (
          <React.Fragment>
            <FormComponents components={items['ui:before']} />
            <FormFields schema={items} prefix={field} />
            <FormComponents components={items['ui:after']} />
          </React.Fragment>
        )}
      </InformedArrayField.Items>
      <FormComponents components={uiAfter} />
    </InformedArrayField>
  );
};

export default ArrayField;
