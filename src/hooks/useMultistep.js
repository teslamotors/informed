import React, { useRef, useState, useMemo, useContext } from 'react';
import {
  MultistepApiContext,
  MultistepStateContext,
  ScopeContext
} from '../Context';
import { useFormApi } from './useFormApi';
import { useFormController } from './useFormController';

const useMultistep = ({ initialStep, multistepApiRef }) => {
  // Get the formApi
  const { validate, getFormState } = useFormController();
  const formApi = useFormApi();

  // Get scope for relevance
  const scope = useContext(ScopeContext);

  // Track number of steps
  const nSteps = useRef(0);

  // Track current step
  const currentStep = useRef(initialStep);

  // Track array of steps
  const [steps] = useState(() => []);

  // Track our steps by name
  const [stepsMap] = useState(() => new Map());

  // Form state will be used to trigger rerenders
  const [multistepState, setState] = useState({
    current: initialStep,
    steps: []
  });

  // YES! this is important! Otherwise it would get a new api object every render
  /// That would cause unessissarry re-renders! so do not remove useMemeo!
  const multistepApi = useMemo(() => {
    // ---------- Define the api functions ----------
    const register = (name, step) => {
      // Create step meta
      const stepMeta = { ...step, index: nSteps.current };
      // Add step to ordered array
      steps.push(stepMeta);
      // Add step to named map
      stepsMap.set(name, stepMeta);
      // Inc number of steps
      nSteps.current = nSteps.current + 1;
      // Update the state
      setState(prev => {
        return { ...prev, steps };
      });
    };

    const getNexStep = () => {
      // Get current step meta
      const stepMeta = stepsMap.get(currentStep.current);

      // Start searching from current step for a relevant next step
      let nextStep;
      for (let i = stepMeta.index + 1; i < steps.length; i++) {
        // Potential next step
        nextStep = steps[i];
        // Check relevance
        const formState = getFormState();
        if (
          nextStep.relevant
            ? nextStep.relevant({ formState, formApi, scope })
            : true
        ) {
          return nextStep.name;
        }
      }

      // IF we get here there are not next steps so we return nothing
      return undefined;
    };

    const getPreviousStep = () => {
      // Get current step meta
      const stepMeta = stepsMap.get(currentStep.current);

      // Start searching from current step for a relevant next step
      let previousStep;
      for (let i = stepMeta.index - 1; i >= 0; i--) {
        // Potential previous step
        previousStep = steps[i];
        // Check relevance
        const formState = getFormState();
        if (
          previousStep.relevant
            ? previousStep.relevant({ formState, formApi, scope })
            : true
        ) {
          return previousStep.name;
        }
      }

      // IF we get here there are no previous steps so we return nothing
      return undefined;
    };

    const next = () => {
      // Get the next step
      const nextStep = getNexStep();
      if (nextStep) {
        // Validate the form
        validate();
        if (getFormState().valid) {
          // Update the current step
          currentStep.current = nextStep;
          // Update the state
          setState(prev => {
            return { ...prev, current: nextStep };
          });
        }
      }
    };

    const previous = () => {
      // Get the next step
      const previousStep = getPreviousStep();
      // Update the current step
      if (previousStep) {
        // Update the current step
        currentStep.current = previousStep;
        // Update the state
        setState(prev => {
          return { ...prev, current: previousStep };
        });
      }
    };

    // ---------- Define the api ----------
    const api = {
      register,
      next,
      previous,
      getNexStep,
      getPreviousStep
    };

    // Set the ref
    if (multistepApiRef) {
      multistepApiRef.current = api;
    }

    // return the api
    return api;
  }, []);

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

export { useMultistep };
