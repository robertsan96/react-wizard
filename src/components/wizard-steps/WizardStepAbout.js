import React, { useState, useEffect } from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

import * as styles from "./WizardSteps.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";
import { WIZARD_DATA } from "../../constants/wizard_data";
import { setWizard, SET_STEP_DATA } from "../../store/actions/wizard.actions";

const WizardStepAbout = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const step = wizard.steps.find((s) => s.data.id === WIZARD_STEP_ABOUT);
  const [stepData, setStepData] = useState({
    ...WIZARD_DATA,
    id: step.data.id,
    data: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [validEmail, setValidEmail] = useState(true);

  // Side Effect to update the global state on changes.
  useEffect(() => {
    dispatch(setWizard(SET_STEP_DATA, stepData));
  }, [dispatch, stepData]);

  const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const validateData = () => {
    setValidEmail(isEmailValid(stepData.data.email));
  };

  const setValue = (forKey, value) => {
    validateData();
    setStepData({
      ...stepData,
      data: { ...stepData.data, [forKey]: value },
    });
  };

  return (
    <Row>
      <Col className={styles.ComponentContainer}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={stepData.data.firstName}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter your first name..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={stepData.data.lastName}
                onChange={(e) => setValue("lastName", e.target.value)}
                placeholder="Enter your last name..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              isInvalid={!validEmail}
              value={stepData.data.email}
              onChange={(e) => setValue("email", e.target.value)}
              placeholder="Enter your email address..."
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default WizardStepAbout;
