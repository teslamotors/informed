import React, { useEffect, useRef, useState } from 'react';
import useMultistepState from './useMultistepState';
import useFormState from './useFormState';
import useMultistepApi from './useMultistepApi';
import { MultistepStepContext } from '../Context';

const useMultistepStep = ({ step, next, previous, relevant }) => {
  const { values } = useFormState();
  const { current, goal } = useMultistepState();
  const { register, deregister, next: goToNext } = useMultistepApi();

  const isCurrent = step === current;
  const isRelevant = relevant ? relevant(values) : true;

  const nextRef = useRef(next);
  const prevRef = useRef(previous);
  const relevantRef = useRef();
  nextRef.current = next;
  prevRef.current = previous;
  relevantRef.current = relevant;

  useState(() => {
    register(
      step,
      {
        name: step,
        getNext: () => nextRef.current,
        getPrevious: () => prevRef.current
      },
      true
    );
  });

  useEffect(
    () => {
      register(step, {
        name: step,
        getNext: () => nextRef.current,
        getPrevious: () => prevRef.current
      });
      return () => {
        deregister(step);
      };
    },
    [step]
  );

  useEffect(
    () => {
      // if we are NOT at the goal go to the next step
      if (goal && isCurrent && goal !== step) {
        // console.log('GOAL', goal, 'STEP', step, 'INDEX', getStep(step).index);
        // console.log('GOING TO NEXT STEP');
        goToNext();
      }
    },
    [goal, isCurrent]
  );

  const render = children => {
    return (
      <MultistepStepContext.Provider
        value={{
          relevant: params =>
            relevantRef.current ? relevantRef.current(params) : true,
          multistep: true
        }}>
        {isCurrent && isRelevant ? children : null}
      </MultistepStepContext.Provider>
    );
  };

  return {
    isCurrent,
    isRelevant,
    step,
    render
  };
};

export default useMultistepStep;
