import React from "react";

import WizardNextButton from "./WizardNextButton";

import * as styles from "./WizardControls.module.scss";
import { Col, Row } from "react-bootstrap";

const WizardControls = () => {
  return (
    <Row>
      <Col className={styles.ControlsContainer}>
        <WizardNextButton />
      </Col>
    </Row>
  );
};

export default WizardControls;
