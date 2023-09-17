import { Debug, FormProvider, Scope, useFieldState } from 'informed';
import { Input } from 'YourComponents';
import { useState, useCallback } from 'react';

const NUMBER_OF_ROWS = 6;
const ROW_NUMBERS = Array.from({ length: NUMBER_OF_ROWS }, (_, i) => i + 1);
const COLUMN_HEADERS = ['A', 'B', 'C', 'D'];

const createEntries = items => items.map(item => ({ item }));

const Example = () => {
  const [rows, setRows] = useState(createEntries(ROW_NUMBERS));
  const [cols, setCols] = useState(createEntries(COLUMN_HEADERS));

  const removeRowAtIndex = useCallback(index => {
    setRows(prevRows => prevRows.filter((_row, i) => i !== index));
  }, []);

  const removeColAtIndex = useCallback(index => {
    setCols(prevCols => prevCols.filter((_col, i) => i !== index));
  }, []);

  return (
    <div>
      <FormProvider>
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
                      <Input
                        name={col.label}
                        initialValue={`${col.label}${row.label}`}
                      />
                    </td>
                  ))}
                </Scope>
              </tr>
            ))}
          </tbody>
        </table>
        <Debug values />
      </FormProvider>
    </div>
  );
};

export default Example;
