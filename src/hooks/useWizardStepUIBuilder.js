import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

export const useWizardStepUIBuilder = () => {
  const steps = useSelector((state) => state.wizardReducer.steps);
  const [builtSteps, setBuiltSteps] = useState([]);

  const getUISeparator = (index) => {
    return steps.length === 0 || index === 0 ? undefined : {};
  };
  const getUIStep = useCallback(
    (step, index) => ({
      id: `step-${step.id}`,
      separator: getUISeparator(index),
      data: { ...step },
    }),
    []
  );
  useEffect(() => {
    setBuiltSteps(steps.map((s, index) => getUIStep(s, index)));
  }, [steps, getUIStep]);

  return { builtSteps };
};
