import React from 'react';
import useFormApi from '../hooks/useFormApi';
import useFormState from '../hooks/useFormState';
import FormFields from '../components/FormFields';
import { RelevantContext } from '../Context';

const Relevant = ({ when, children, relevant }) => {
  const formState = useFormState();

  const isRelevant = when(formState);

  if (isRelevant && relevant) {
    return (
      <RelevantContext.Provider value={relevant}>
        {children}
      </RelevantContext.Provider>
    );
  }

  if (isRelevant) {
    return children;
  }

  return null;
};

export const RelevantFields = ({ relevant, children }) => {
  // Grab the form api ( we need it to get the actual field name because might be in scope )
  const { getOptions } = useFormApi();

  // Grap the schema
  const { schema } = getOptions();

  // Find conditional from schema
  const conditional = schema.allOf.find(c => c.relevant === relevant);

  // Example then ( its a subschema )
  // then: {
  //   properties: {
  //     spouse: {
  //       type: 'string',
  //       title: 'Spouse name',
  //       'ui:control': 'input'
  //     }
  //   }
  // }
  const subSchema = conditional.then;

  // Turn the if into a when function for informed
  // Example if condition
  // if: {
  //   properties: {
  //     married: { const: 'yes' }
  //   },
  //   required: ['married']
  // },
  const { properties: conditions } = conditional.if;
  const when = ({ values }) => {
    // Example key "married, Example condition: "{ const: 'yes' }"
    return Object.keys(conditions).every(key => {
      const condition = conditions[key];
      // values.married === 'yes'
      return values[key] === condition.const;
    });
  };

  return (
    <Relevant when={when} relevant={relevant}>
      {children ? children : <FormFields schema={subSchema} />}
    </Relevant>
  );
};

export default Relevant;
