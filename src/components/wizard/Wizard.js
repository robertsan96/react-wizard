import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";

import * as styles from "./Wizard.module.scss";

import WizardHeader from "./layout/WizardHeader";
import WizardSteps from "./layout/WizardSteps";

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
          <WizardSteps />
          <hr style={{ marginTop: 50, marginBottom: 30 }} />
          <Form style={{ padding: 10, marginTop: 20 }}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Wizard;
