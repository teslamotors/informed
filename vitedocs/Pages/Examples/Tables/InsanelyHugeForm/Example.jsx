import { FormProvider, Scope, utils } from 'informed';
import { SimpleInput, Button } from 'YourComponents';
import { useState, useCallback, useRef } from 'react';

const NUMBER_OF_ROWS = 300;
const ROW_NUMBERS = Array.from({ length: NUMBER_OF_ROWS }, (_, i) => i + 1);
const COLUMN_HEADERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const createEntries = items => items.map(item => ({ label: item }));

function increaseValuesByOne(values) {
  const obj = JSON.parse(JSON.stringify(values));
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let innerObj = obj[key];
      for (let innerKey in innerObj) {
        if (innerObj.hasOwnProperty(innerKey)) {
          innerObj[innerKey] += 1;
        }
      }
    }
  }
  return obj;
}

// Generate formatter & parser from INTL options
const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Example = () => {
  const [rows, setRows] = useState(createEntries(ROW_NUMBERS));
  const [cols, setCols] = useState(createEntries(COLUMN_HEADERS));

  const removeRowAtIndex = useCallback(index => {
    setRows(prevRows => prevRows.filter((_row, i) => i !== index));
  }, []);

  const removeColAtIndex = useCallback(index => {
    setCols(prevCols => prevCols.filter((_col, i) => i !== index));
  }, []);

  const formApiRef = useRef();

  const updateAllValues = formApiRef => {
    const values = formApiRef.current.getFormState().values;
    formApiRef.current.setTheseValues(increaseValuesByOne(values));
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <strong>This button will add 1 to all fields.</strong>
        <Button
          type="button"
          onClick={() => {
            updateAllValues(formApiRef);
          }}>
          Update All
        </Button>
      </div>
      <FormProvider formApiRef={formApiRef}>
        <div style={{ overflow: 'scroll', width: '70vw', marginTop: '1rem' }}>
          <table className="table-styles">
            <thead>
              <tr>
                <th />
                {cols.map((col, i) => (
                  <th key={`th-${col.label}`}>
                    <div>
                      {col.label}
                      <button onClick={() => removeColAtIndex(i)}>-</button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label}>
                  <Scope scope={row.label}>
                    <td>
                      <div>
                        {row.label}
                        <button onClick={() => removeRowAtIndex(i)}>-</button>
                      </div>
                    </td>
                    {cols.map(col => (
                      <td key={col.label}>
                        <SimpleInput
                          name={col.label}
                          initialValue={1000 + +row.label}
                          formatter={formatter}
                          parser={parser}
                        />
                      </td>
                    ))}
                  </Scope>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FormProvider>
    </div>
  );
};

export default Example;
