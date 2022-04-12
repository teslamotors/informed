import React, { useRef, useState, useMemo, useContext, useEffect } from 'react';
import {
  MultistepApiContext,
  MultistepStateContext,
  ScopeContext
} from '../Context';
import { useFormApi } from './useFormApi';
import { useFormController } from './useFormController';

const useMultistep = ({ initialStep, multistepApiRef }) => {
  // Get the formApi
  const {
    validate,
    asyncValidate,
    getFormState,
    getFieldState,
    emitter
  } = useFormController();

  const formApi = useFormApi();

  // Get scope for relevance
  const scope = useContext(ScopeContext);

  // Track number of steps
  const nSteps = useRef(0);

  // Track current step
  const currentStep = useRef();

  // Track array of steps
  const [steps] = useState(() => []);

  // Track our steps by name
  const [stepsMap] = useState(() => new Map());

  // Form state will be used to trigger rerenders
  const [multistepState, setState] = useState({
    steps: [],
    goal: null
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
      // Determine if we have initial goal and it just registered
      let initialGoal = null;
      let startingStep = null;

      // There is no initial step so we start at first one
      if (!initialStep) {
        startingStep = steps[0].name;
      }
      // Otherwise we wait until our initial step has registered and then set our goal!
      else if (initialStep && name === initialStep) {
        initialGoal = initialStep;
        startingStep = steps[0].name;
      }
      // console.log('WTF', name, initialGoal, startingStep);
      // Update the state
      setState(prev => {
        if (!prev.current && startingStep) {
          // Update the current step
          currentStep.current = startingStep;
        }
        return {
          ...prev,
          steps,
          goal: prev.goal || initialGoal,
          current: prev.current || startingStep
        };
      });
    };

    const deregister = step => {
      const stepMeta = stepsMap.get(step);
      // Remove step at index
      steps.splice(stepMeta.index, 1);
      // Update indexes
      steps.forEach((s, i) => (s.index = i));
      // Remove step to named map
      stepsMap.delete(step);
      // Dec number of steps
      nSteps.current = steps.length;
      // console.log('WTF', name);
      // Update the state
      setState(prev => {
        return {
          ...prev,
          steps
        };
      });
    };

    const getNextStep = () => {
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

    // Helper function for next
    const proceed = (nextStep, cb) => {
      // Get the multistep state values
      if (cb && typeof cb === 'function') {
        const fieldState = getFieldState(currentStep.current);

        // Simply making value --> values because it makes more sense in this context
        const subState = {
          ...fieldState,
          values: fieldState.value,
          errors: fieldState.error
        };

        cb(subState)
          .then(() => {
            // Update the current step
            currentStep.current = nextStep;
            // Update the state
            setState(prev => {
              return { ...prev, current: nextStep };
            });
          })
          .catch(() => {
            // TODO mayyybe do something here ??
          });
      } else {
        // Update the current step
        currentStep.current = nextStep;
        // Update the state
        setState(prev => {
          return { ...prev, current: nextStep };
        });
      }
    };

    const next = cb => {
      // Get the next step
      const nextStep = getNextStep();
      if (nextStep) {
        // Touch all the fields
        formApi.touchAllFields();
        // Validate the form
        validate();
        // Async validate the form
        // We pass in a callback to proceed if we succeed async validation!
        asyncValidate(() => proceed(nextStep, cb));
        // Only proceed if we are valid and we are NOT currently async validating
        if (getFormState().valid && getFormState().validating === 0) {
          proceed(nextStep, cb);
        }
      }
    };

    const previous = () => {
      // Get the next step
      const previousStep = getPreviousStep();

      // Clean up all multistep errors
      steps.forEach(step => {
        formApi.clearError(step.name);
      });

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

    const setCurrent = step => {
      // Get current step meta
      const goalIndex = stepsMap.get(step).index;
      const currIndex = stepsMap.get(currentStep.current).index;

      // If the goal is behind then just go straight there
      if (goalIndex < currIndex) {
        // Update the current step
        currentStep.current = step;
        // Update the state
        setState(prev => {
          return { ...prev, current: step };
        });
      }
      // If the goal is ahead then start walking! ;)
      else {
        // Update the state
        setState(prev => {
          return { ...prev, goal: step };
        });
      }
    };

    const metGoal = () => {
      // Update the state
      setState(prev => {
        return { ...prev, goal: null };
      });
    };

    const getCurrentStep = () => {
      return currentStep.current;
    };

    // ---------- Define the api ----------
    const api = {
      register,
      deregister,
      next,
      previous,
      getNextStep,
      getPreviousStep,
      setCurrent,
      metGoal,
      getCurrentStep
    };

    // Set the ref
    if (multistepApiRef) {
      multistepApiRef.current = api;
    }

    // return the api
    return api;
  }, []);

  // Register for events when multistep relevance changes
  useEffect(() => {
    const listener = () => {
      // Update the state
      setState(prev => {
        return {
          ...prev,
          nextStep: multistepApi.getNextStep(),
          previousStep: multistepApi.getPreviousStep()
        };
      });
    };

    emitter.on('multistep-relevance', listener);

    return () => {
      emitter.removeListener('multistep-relevance', listener);
    };
  }, []);

  // Also re evaluate when current changes
  useEffect(
    () => {
      // Update the state
      setState(prev => {
        return {
          ...prev,
          nextStep: multistepApi.getNextStep(),
          previousStep: multistepApi.getPreviousStep()
        };
      });
    },
    [multistepState.current]
  );

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
