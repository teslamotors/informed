import { Debug, FormProvider, Scope, useFieldState } from 'informed';
import { Input, Select, Option } from 'YourComponents';
import markets from './markets';
import currencies from './currencies';

const Excess = () => {
  const { value: supply } = useFieldState('supply');
  const { value: demand } = useFieldState('demand');

  if (supply > demand) {
    return <span style={{ color: 'green' }}>{supply - demand}</span>;
  }
};

const Deficit = () => {
  const { value: supply } = useFieldState('supply');
  const { value: demand } = useFieldState('demand');

  if (demand > supply) {
    return <span style={{ color: 'orange' }}>{supply - demand}</span>;
  }
};

const Color = () => {
  const { value } = useFieldState('color');

  return (
    <div style={{ backgroundColor: value, width: '100%', height: '20px' }} />
  );
};

const randomColor = () => {
  const colors = ['red', 'green', 'blue', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Example = () => {
  return (
    <div>
      <FormProvider>
        <h4>
          Displaying {markets.length} markets, each row has 5 inputs resulting
          in {markets.length * 5} inputs.
        </h4>
        <table className="table-styles">
          <thead>
            <tr>
              <th>Row</th>
              <th>Market</th>
              <th>Supply</th>
              <th>Demmand</th>
              <th>Excess</th>
              <th>Deficit</th>
              <th>Favorite Color</th>
              <th>Color</th>
              <th>Currency</th>
              <th>Notes:</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((market, i) => (
              <tr key={market.code}>
                <Scope scope={market.code}>
                  <td>{i}</td>
                  <td>{market.name}</td>
                  <td>
                    <Input
                      name="supply"
                      type="number"
                      initialValue={market.supply}
                    />
                  </td>
                  <td>
                    <Input
                      name="demand"
                      type="number"
                      initialValue={market.demand}
                    />
                  </td>
                  <td>
                    <Excess />
                  </td>
                  <td>
                    <Deficit />
                  </td>
                  <td>
                    <Select name="color" initialValue={randomColor()}>
                      <Option key="red">Red</Option>
                      <Option key="green">Green</Option>
                      <Option key="blue">Blue</Option>
                      <Option key="pink">Pink</Option>
                    </Select>
                  </td>
                  <td>
                    <Color />
                  </td>
                  <td>
                    <Select
                      field="currency"
                      options={currencies}
                      initialValue="USD"
                    />
                  </td>
                  <td>
                    <Input name="notes" />
                  </td>
                </Scope>
              </tr>
            ))}
          </tbody>
        </table>
      </FormProvider>
    </div>
  );
};

export default Example;
