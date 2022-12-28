# Table Forms

Sometimes you need very complex forms where fields depend on each-other much like formulas in Excel.

<!-- STORY -->

```jsx
import {
  FormProvider,
  Input,
  Debug,
  Scope,
  useFieldApi,
  useConditional
} from 'informed';

// prettier-ignore
const markets = [
  { supply: 100000, demand: 70000, cost: 32200, price: 46000, market: "United States", margin: 0.3 },
  { supply: 50000, demand: 60000, cost: 15500, price: 31000, market: "United Kingdom", margin: 0.5 },
  { supply: 80000, demand: 70000, cost: 29600, price: 37000, market: "Japan", margin: 0.2 },
  { supply: 70000, demand: 80000, cost: 25200, price: 42000, market: "China", margin: 0.4 },
  { supply: 60000, demand: 90000, cost: 27300, price: 39000, market: "India", margin: 0.3 },
  { supply: 90000, demand: 60000,  cost: 28800, price: 48000, market: "Germany", margin: 0.4 }
];

function Cell({
  name,
  evaluateWhen,
  formula,
  data,
  readOnly,
  type,
  step,
  native
}) {
  const { setValue } = useFieldApi(name);

  // Define a function to get called with the given formula whenever the specified fields change
  const evaluate = useCallback(({ formApi, scope, target }) => {
    if (formula) {
      console.log(`Evaluating ${name} because ${target} changed`);
      // Get this markets data EX: { supply: 90000, demand: 60000,  cost: 28800, price: 48000, market: "Germany", margin: 0.4 }
      const market = formApi.getValue(scope);
      // Pass the entire market definition to the formula
      const result = market ? formula(market) : null;
      // If we got a result update its value
      if (result) setValue(Math.round(result * 100) / 100);
    }
  }, []);

  // Special hook that will trigger our evaluate function whenever specified fields change
  useConditional({
    evaluate,
    evaluateWhen,
    native // VERY IMPORTANT ( prevents infinite loops )
  });

  return (
    <td>
      <Input
        name={name}
        initialValue={data}
        type={type}
        readOnly={readOnly}
        step={step}
      />
    </td>
  );
}

// Formula definitions
const calculatePrice = ({ margin, cost }) => cost / (1 - margin);
const calculateMargin = ({ price, cost }) => (price - cost) / price;
const calculateDemand = ({ price, market, demand }) => {
  const originalMarket = markets.find(m => m.market === market);
  const originalPrice = originalMarket.price;
  const originalDemand = originalMarket.demand;
  const percentChange = (originalPrice - price) / originalPrice;
  return originalDemand + originalDemand * percentChange;
};

function MarketsTable({ markets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Market</th>
          <th>Supply</th>
          <th>Demand</th>
          <th>Cost</th>
          <th>Price</th>
          <th>Margin</th>
        </tr>
      </thead>
      <tbody>
        {markets.map(market => (
          <tr key={market.market}>
            <Scope scope={market.market}>
              <Cell name="market" data={market.market} readOnly />
              <Cell name="supply" data={market.supply} type="number" />
              <Cell
                name="demand"
                data={market.demand}
                formula={calculateDemand}
                evaluateWhen={['price']}
                type="number"
                step="1000"
              />
              <Cell name="cost" data={market.cost} type="number" step="1000" />
              <Cell
                name="price"
                data={market.price}
                formula={calculatePrice}
                evaluateWhen={['margin', 'cost']}
                type="number"
                step="1000"
                native
              />
              <Cell
                name="margin"
                data={market.margin}
                formula={calculateMargin}
                evaluateWhen={['price']}
                type="number"
                step="0.1"
                native
              />
            </Scope>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const TableFields = () => {
  return (
    <div className="field-table">
      <h3>Criteria</h3>
      <ol>
        <li>Recalculate price when margin or cost change</li>
        <li>Recalculate margin when the price changes</li>
        <li>Recalculate demand when the price changes</li>
      </ol>
      <h3>Issues</h3>
      <ol>
        <li>
          When you change margin, that will effect the price, which effects the
          margin. ( This is a loop we must prevent )
        </li>
        <li>
          When you change the margin it should affect price which effects the
          demand ( this is a transitive change we must allow )
        </li>
      </ol>
      <h3>Form Table</h3>
      <FormProvider>
        <MarketsTable markets={markets} />
        {/* <Debug /> */}
      </FormProvider>
    </div>
  );
};
```
