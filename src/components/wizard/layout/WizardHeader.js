import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import * as styles from "./WizardHeader.module.scss";

const WizardHeader = () => {
  return (
    <Row>
      <Col lg={12} className={styles.WizardHeaderLogo}>
        <Image src="https://via.placeholder.com/120" roundedCircle />
      </Col>
      <Col lg={12} className={styles.WizardHeaderTitleContainer}>
        <h1 className={styles.WizardHeaderTitle}>Create your profile</h1>
        <p className={styles.WizardHeaderSubtitle}>
          This information will let us know more about you.
        </p>
      </Col>
    </Row>
  );
};

export default WizardHeader;
