import React from "react";

import * as styles from "./WizardControls.module.scss";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";

const WizardNextButton = () => {
  const wizard = useSelector((state) => state.wizardReducer);
  const activeStep = wizard.activeStep;
  const stepData = wizard.data.find((sd) => sd.id === activeStep.data.id);

  const isActive = () => stepData && stepData.complete === true;

  const classNames = [styles.NextButton, isActive() && styles.NextButtonActive];
  return (
    <button className={classNames.join(" ")}>
      <ChevronRightIcon />
    </button>
  );
};

export default WizardNextButton;
