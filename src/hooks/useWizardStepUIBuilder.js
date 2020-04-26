import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWizard,
  SET_STEPS,
  SET_ACTIVE_STEP,
} from "../store/actions/wizard.actions";
import { WIZARD_STEPS } from "../constants/wizard_steps";

export const useWizardStepUIBuilder = () => {
  const dispatch = useDispatch();

  const [steps] = useState(WIZARD_STEPS);
  const uiSteps = useSelector((state) => state.wizardReducer.steps);
  const activeStep = useSelector((state) => state.wizardReducer.activeStep);

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

  // Side Effect to set the first step active once
  // the list of steps was updated.
  useEffect(() => {
    if (uiSteps.length > 0 && activeStep === undefined) {
      dispatch(setWizard(SET_ACTIVE_STEP, uiSteps[1]));
    }
    if (uiSteps.length === 0) {
      dispatch(setWizard(SET_ACTIVE_STEP, undefined));
    }
  }, [dispatch, uiSteps, activeStep]);
};
