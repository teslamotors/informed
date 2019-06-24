# Complex Array field validation

We are putting together a skilled teams of raccoon agents! We have preloaded the first member of the
Blood Furs squad for you! Please finish creating the teams, and good luck out there!

<!-- STORY -->

```jsx
import { Form, ArrayField, Text, Select, Option } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5 ? 'Minimum 5 char' : undefined;
};

const matchValidation = (value, values, i, other) => {
  const raccoons = values.raccoons;

  return raccoons &&
    raccoons[i] &&
    value === raccoons[i][other]
    ? 'Items cannot be the same'
    : undefined;
};

const arrayValidation = ( values, length ) => {
  if ( length < '3' ) {
    return 'There must be at least three raccoons!';
  }
}

const initialValue = [{
  squad: '1', 
  name: 'Sparky', 
  item1: 'crossbow', 
  item2: 'crossbow'
}];

const Example = () => {

  return ( 
     <Form autocomplete="off">
        <ArrayField field="raccoons" initialValue={initialValue} validate={arrayValidation}>
          {({ add, fields }) => (
            <React.Fragment>
              <table>
                <thead>
                  <tr>
                    <td>
                      <span>Squad</span>
                    </td>
                    <td>
                      <span>Name</span>
                    </td>
                    <td>
                      <span>Item1</span>
                    </td>
                    <td>
                      <span>Item2</span>
                    </td>
                    <td>
                      <span>Remove</span>
                    </td>
                  </tr>
                </thead>
                {fields.map(({ field, key, initialValue, remove }, i) => (
                  <tr key={key}>
                    <td>
                      <Select field={`${field}.squad`} initialValue={initialValue && initialValue.squad}>
                        <Option value="" disabled>
                        -- Choose Squad --
                        </Option>
                        <Option value="1">Blood Furs</Option>
                        <Option value="2">Raiding Rodents</Option>
                        <Option value="3">Delta Tails</Option>
                      </Select>
                    </td>
                    <td>
                      <Text
                        size="5"
                        field={`${field}.name`}
                        validate={basicValidation}
                        initialValue={initialValue && initialValue.name}
                        validateOnBlur
                        validateOnChange
                        style={{minWidth: '70px'}}
                        format={value => value && `${value.toUpperCase()}`}
                        parse={value => value && `${value.toUpperCase()}`}
                      />
                    </td>
                    <td>
                      <Text
                        size="5"
                        field={`${field}.item1`}
                        validate={(value, values) =>
                          matchValidation(value, values, i, 'item2')
                        }                            
                        notify={[`${field}.item2`]}
                        initialValue={initialValue && initialValue.item1}
                        validateOnBlur
                        validateOnChange
                        style={{minWidth: '70px'}}
                      />
                    </td>
                    <td>
                      <Text
                        size="5"
                        field={`${field}.item2`}
                        validate={(value, values) =>
                          matchValidation(value, values, i, 'item1')
                        }   
                        notify={[`${field}.item1`]}
                        initialValue={initialValue && initialValue.item2}
                        validateOnBlur
                        validateOnChange
                        style={{minWidth: '70px'}}
                      />
                    </td>
                    <td>
                      <button type="button" onClick={remove}>-</button>
                    </td>
                  </tr>
                ))}
                <tfoot>
                  <tr>
                    <td>
                      <button type="button" onClick={add}>Add row</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </React.Fragment>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
  )


}


```
