import React from "react";

import * as styles from "./WizardSteps.module.scss";

import WizardStep from "./WizardStep";
import { useWizardStepUIBuilder } from "../../../hooks/useWizardStepUIBuilder";

const WizardSteps = () => {
  const { builtSteps } = useWizardStepUIBuilder();

  return (
    <ul className={styles.StepsList}>
      {builtSteps.map((s) => (
        <WizardStep key={s.id} step={s} />
      ))}
    </ul>
  );
};

export default WizardSteps;
