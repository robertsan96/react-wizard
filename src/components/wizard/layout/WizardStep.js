import React from "react";

import * as styles from "./WizardSteps.module.scss";
import { useSelector } from "react-redux";

const WizardStep = ({ step }) => {
  const uiSteps = useSelector((state) => state.wizardReducer.steps);
  const activeStep = useSelector((state) => state.wizardReducer.activeStep);

  const isActive = () => {
    if (!activeStep) return false;
    if (activeStep.id === step.id) return true;
    // In case the current step is before the active step,
    // We have to set them to active in the UI so the user
    // knows that he already checked that step out.
    const activeStepIndex = uiSteps.findIndex((e) => e.id === activeStep.id);
    const currentStepIndex = uiSteps.findIndex((e) => e.id === step.id);
    if (currentStepIndex < activeStepIndex) return true;
    return false;
  };

  const uiStepClasses = [styles.Step, isActive() ? styles.StepActive : ""];
  const uiStepSeparatorClasses = [
    styles.StepSeparator,
    isActive() ? styles.StepSeparatorActive : "",
  ];

  return (
    <>
      {step.separator && <li className={uiStepSeparatorClasses.join(" ")}></li>}
      <li className={uiStepClasses.join(" ")}>
        <div>{step.data.icon}</div>
      </li>
    </>
  );
};

export default WizardStep;
