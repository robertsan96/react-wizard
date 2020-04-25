import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import * as styles from "./WizardHeader.module.scss";
import { useSelector } from "react-redux";

const WizardHeader = () => {
  const activeStep = useSelector((state) => state.wizardReducer.activeStep);

  const getHeaderTitle = () => {
    return activeStep ? activeStep.data.title : "Contrive Wizard V1";
  };

  const getHeaderSubtitle = () => {
    return activeStep
      ? activeStep.data.description
      : "This information will let us know more about you.";
  };
  return (
    <Row>
      <Col lg={12} className={styles.WizardHeaderLogo}>
        <Image src="https://via.placeholder.com/120" roundedCircle />
      </Col>
      <Col lg={12} className={styles.WizardHeaderTitleContainer}>
        <h1 className={styles.WizardHeaderTitle}>{getHeaderTitle()}</h1>
        <p className={styles.WizardHeaderSubtitle}>{getHeaderSubtitle()}</p>
      </Col>
    </Row>
  );
};

export default WizardHeader;
