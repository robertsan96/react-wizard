import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import * as styles from "./Wizard.module.scss";

import WizardHeader from "./layout/WizardHeader";

const Wizard = () => {
  return (
    <Container>
      <Row>
        <Col
          className={styles.WizardContainer}
          lg={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={12}>
          <WizardHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default Wizard;
