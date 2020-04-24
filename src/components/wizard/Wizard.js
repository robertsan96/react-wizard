import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import * as styles from "./Wizard.module.scss";

const Wizard = () => {
  return (
    <Container>
      <Row>
        <Col
          className={styles.WizardContainer}
          lg={{ span: 8, offset: 2 }}
          sm={12}
        >
          da
        </Col>
      </Row>
    </Container>
  );
};

export default Wizard;
