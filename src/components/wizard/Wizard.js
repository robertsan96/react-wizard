import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";

import * as styles from "./Wizard.module.scss";

import WizardHeader from "./layout/WizardHeader";
import WizardSteps from "./layout/WizardSteps";
import { useSelector } from "react-redux";

const Wizard = () => {
  const activeStep = useSelector((state) => state.wizardReducer.activeStep);
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
        </Col>
      </Row>
    </Container>
  );
};

export default Wizard;
