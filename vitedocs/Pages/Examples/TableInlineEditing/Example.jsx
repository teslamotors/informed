import {
  Debug,
  FormProvider,
  Scope,
  useFieldApi,
  useConditional
} from 'informed';
import { useCallback, useRef } from 'react';
import { Input, Button } from 'YourComponents';

// prettier-ignore
const markets = [
  { supply: 100000, demand: 70000, cost: 32200, price: 46000, market: "US", margin: 0.3 },
  { supply: 50000, demand: 60000, cost: 15500, price: 31000, market: "GB", margin: 0.5 },
  { supply: 80000, demand: 70000, cost: 29600, price: 37000, market: "JP", margin: 0.2 },
  { supply: 70000, demand: 80000, cost: 25200, price: 42000, market: "CN", margin: 0.4 },
  { supply: 60000, demand: 90000, cost: 27300, price: 39000, market: "IN", margin: 0.3 },
  { supply: 90000, demand: 60000,  cost: 28800, price: 48000, market: "DE", margin: 0.4 }
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
  const evaluate = useCallback(({ formApi, scope, triggers }) => {
    if (formula) {
      // Get this markets data EX: { supply: 90000, demand: 60000,  cost: 28800, price: 48000, market: "Germany", margin: 0.4 }
      const market = formApi.getValue(scope);
      // Pass the entire market definition to the formula
      const result = market ? formula(market) : null;
      // If we got a result update its value
      if (result) {
        // Triggers is the list of fields that led to triggering this evaluation
        console.log(`Re Evaluating ${name}`, JSON.stringify(triggers, null, 2));
        setValue(Math.round(result * 100) / 100, { triggers });
      }
    }
  }, []);

  // Special hook that will trigger our evaluate function whenever specified fields change
  useConditional({
    name,
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
        isReadOnly={readOnly}
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
    <table className="table-styles">
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
                native
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

const Example = () => {
  const formApiRef = useRef();

  return (
    <div>
      <h3>Form Table</h3>
      <Button
        type="button"
        onClick={() => {
          formApiRef.current.reset();
        }}>
        Reset
      </Button>
      <br />
      <br />
      <FormProvider formApiRef={formApiRef}>
        <div>
          <MarketsTable markets={markets} />
        </div>
        <Debug values />
      </FormProvider>
    </div>
  );
};

export default Example;
