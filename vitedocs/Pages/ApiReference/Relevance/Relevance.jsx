import { useEffect } from 'react';
import { ArrayFieldRelevance } from './ArrayFieldRelevance';
import { BaiscRelevance } from './BasicRelevance';
import { ScopedRelevance } from './ScopedRelevance';

export const Relevance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BaiscRelevance />
      <hr />
      <ScopedRelevance />
      <hr />
      <ArrayFieldRelevance />
      <br />
      <br />
    </>
  );
};
