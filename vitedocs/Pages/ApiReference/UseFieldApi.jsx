import { useEffect } from 'react';
import CarColorFieldControl from '../GettingStarted/CarColorFieldControl/CarColorFieldControl';

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarColorFieldControl />
      <br />
      <br />
    </>
  );
}
