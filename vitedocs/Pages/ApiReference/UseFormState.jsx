import { useEffect } from 'react';
import CarColorControl from '../GettingStarted/CarColors/CarColors';

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarColorControl />
      <br />
      <br />
    </>
  );
}
