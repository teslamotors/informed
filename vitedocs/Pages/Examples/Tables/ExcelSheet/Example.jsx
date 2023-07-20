import { Debug, FormProvider, Scope, useFieldState } from 'informed';
import { Input } from 'YourComponents';

import { useState } from 'react';

const Example = () => {
  const [rows, setRows] = useState([
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '7' }
  ]);
  const [cols, setCols] = useState([
    { label: 'A' },
    { label: 'B' },
    { label: 'C' },
    { label: 'D' }
  ]);

  const removeRowAtIndex = index => {
    setRows(prevRows => prevRows.filter((row, i) => i !== index));
  };

  const removeColAtIndex = index => {
    setCols(prevCols => prevCols.filter((col, i) => i !== index));
  };

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
