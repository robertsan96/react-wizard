import React from "react";

import * as styles from "./WizardSteps.module.scss";

import WizardStep from "./WizardStep";
import { useWizardStepUIBuilder } from "../../../hooks/useWizardStepUIBuilder";
import { useSelector } from "react-redux";

const WizardSteps = () => {
  useWizardStepUIBuilder();
  const steps = useSelector((state) => state.wizardReducer.steps);

  return (
    <ul className={styles.StepsList}>
      {steps.map((s) => (
        <WizardStep key={s.id} step={s} />
      ))}
    </ul>
  );
};

export default WizardSteps;
