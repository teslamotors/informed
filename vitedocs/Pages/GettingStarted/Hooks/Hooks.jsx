import { Info } from '../../../Info';
import CarColor from '../CarColor/CarColor';
import CarColors from '../CarColors/CarColors';
import CarColorControl from '../CarColorControl/CarColorControl';

export default function Intro() {
  return (
    <>
      <h1>Hooks</h1>
      <Info>
        Informed gives you various hooks for getting access to the form state
        and api.
      </Info>
      <CarColor />
      <hr />
      <CarColors />
      <hr />
      <CarColorControl />

      <br />
      <br />
    </>
  );
}
