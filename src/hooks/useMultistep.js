import React, { useState } from 'react';
import { MultistepApiContext, MultistepStateContext } from '../Context';
import useFormApi from './useFormApi';
import useStateWithGetter from './useStateWithGetter';

const useMultistep = ({ initialStep, multistepApiRef }) => {
  // Get the formApi
  const { getValues, validate, screenValid } = useFormApi();

  // Track our steps by name
  const [stepsByName] = useState(new Map());

  // Define our state
  const [
    multistepState,
    setMultistepState,
    getMultistepState
  ] = useStateWithGetter({
    current: initialStep,
    steps: []
  });

  // Define our api
  const [multistepApi] = useState(() => {
    const getCurrentStep = () => {
      // Get the current state
      const { current } = getMultistepState();
      // Get the current step
      const currentStep = stepsByName.get(current);
      // Return it
      return currentStep;
    };

    const api = {
      // Gets the whole state
      getState: () => getMultistepState(),
      // Gets just the current
      getCurrentStep,
      // Gets that step
      getStep: name => stepsByName.get(name),
      // Goes to next step
      next: () => {
        // Validate the entire form
        validate();

        // If fields on the screen ( currently rendered ) are valid move on
        if (screenValid()) {
          // Get the current step
          const { getNext } = getCurrentStep();
          const next = getNext();
          // Determine what the next step should be
          const nextStep =
            typeof next === 'function' ? next(getValues()) : next;
          // Determine if it has a next
          if (nextStep) {
            setMultistepState(prev => ({
              ...prev,
              current: nextStep
            }));
          }
        }
      },
      // Goes to previous step
      back: () => {
        // Get the current step
        const { getPrevious } = getCurrentStep();
        const previous = getPrevious();
        // Determine what the previous step should be
        const previousStep =
          typeof previous === 'function' ? previous(getValues()) : previous;
        // Determine if it has a previous
        if (previousStep) {
          setMultistepState(prev => ({
            ...prev,
            current: previousStep
          }));
        }
      },
      // Goes to specified step
      setCurrent: next => {
        // Determine if it has a next
        if (next) {
          setMultistepState(prev => ({
            ...prev,
            current: next
          }));
        }
      },
      // Registers the step
      register: (name, step, initial) => {
        stepsByName.set(name, step);
        if (!initial) {
          setMultistepState(prev => ({
            ...prev,
            steps: Array.from(stepsByName.keys())
          }));
        }
      },
      // Deregisters the step
      deregister: name => {
        stepsByName.delete(name);
        setMultistepState(prev => ({
          ...prev,
          steps: Array.from(stepsByName.keys())
        }));
      }
    };

    if (multistepApiRef) {
      multistepApiRef.current = api;
    }

    return api;
  });

  // Render funtion that will provide state and api
  const render = children => (
    <MultistepApiContext.Provider value={multistepApi}>
      <MultistepStateContext.Provider value={multistepState}>
        {children}
      </MultistepStateContext.Provider>
    </MultistepApiContext.Provider>
  );

  return {
    ...multistepApi,
    ...multistepState,
    render
  };
};

export default useMultistep;
