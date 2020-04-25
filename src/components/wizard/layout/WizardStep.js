import React from "react";

import * as styles from "./WizardSteps.module.scss";
import { WIZARD_STEP_ABOUT } from "../../../constants/wizard_steps";

const WizardStep = ({ step }) => {
  const uiStepClasses = [
    styles.Step,
    step.data.id === WIZARD_STEP_ABOUT ? styles.StepActive : "",
  ];
  return (
    <>
      {step.separator && <li className={styles.StepSeparator}></li>}
      <li className={uiStepClasses.join(" ")}>
        <div>{step.data.icon}</div>
      </li>
    </>
  );
};

export default WizardStep;
