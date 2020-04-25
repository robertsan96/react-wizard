import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import * as styles from "./Wizard.module.scss";

import WizardHeader from "./layout/WizardHeader";
import WizardSteps from "./layout/WizardSteps";
import WizardControls from "../wizard-controls/WizardControls";
import { useStepDataInitializer } from "../../hooks/useStepDataInitializer";
import { useSelector } from "react-redux";
import { WIZARD_STEP_PAYMENT } from "../../constants/wizard_steps";

const Wizard = () => {
  useStepDataInitializer();
  const wizard = useSelector((state) => state.wizardReducer);
  const activeStep = wizard.activeStep;

  return (
    <Container>
      <Row>
        <Col
          className={styles.WizardContainer}
          lg={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={12}>
          <WizardHeader />
          <WizardSteps />
          <hr />
          {activeStep && activeStep.data.component}
          {activeStep && activeStep.data.id !== WIZARD_STEP_PAYMENT && (
            <WizardControls />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Wizard;
