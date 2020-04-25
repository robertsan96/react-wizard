import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setWizard, SET_STEPS } from "../store/actions/wizard.actions";
import { WIZARD_STEPS } from "../constants/wizard_steps";

export const useWizardStepUIBuilder = () => {
  const dispatch = useDispatch();
  const [steps] = useState(WIZARD_STEPS);

  const getUISeparator = useCallback(
    (index) => {
      return steps.length === 0 || index === 0 ? undefined : {};
    },
    [steps]
  );
  const getUIStep = useCallback(
    (step, index) => ({
      id: `step-${step.id}`,
      separator: getUISeparator(index),
      data: { ...step },
    }),
    [getUISeparator]
  );
  useEffect(() => {
    dispatch(
      setWizard(
        SET_STEPS,
        steps.map((s, index) => getUIStep(s, index))
      )
    );
  }, [steps, getUIStep, dispatch]);
};
