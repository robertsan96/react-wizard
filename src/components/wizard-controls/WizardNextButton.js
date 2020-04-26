import React from "react";

import * as styles from "./WizardControls.module.scss";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector, useDispatch } from "react-redux";
import { setWizard, SET_ACTIVE_STEP } from "../../store/actions/wizard.actions";

const WizardNextButton = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const activeStep = wizard.activeStep;
  const stepData = wizard.data.find((sd) => sd.id === activeStep.data.id);

  const isActive = () => stepData && stepData.complete === true;

  const classNames = [styles.NextButton, isActive() && styles.NextButtonActive];

  const onNext = () => {
    if (!isActive()) return;
    const currentIndex = wizard.steps.findIndex(
      (ws) => ws.id === activeStep.id
    );
    const nextUiStep = wizard.steps[currentIndex + 1];
    if (nextUiStep) {
      console.log(nextUiStep);
      dispatch(setWizard(SET_ACTIVE_STEP, nextUiStep));
    }
  };
  return (
    <button onClick={onNext} className={classNames.join(" ")}>
      <ChevronRightIcon />
    </button>
  );
};

export default WizardNextButton;
