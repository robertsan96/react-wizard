import React, { useState, useEffect, useCallback } from "react";

import { Row, Col, Form } from "react-bootstrap";

import * as styles from "./WizardSteps.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";
import { setWizard, SET_STEP_DATA } from "../../store/actions/wizard.actions";

const WizardStepAbout = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const step = wizard.steps.find((s) => s.data.id === WIZARD_STEP_ABOUT);
  const stepData = wizard.data.find((s) => s.id === step.data.id);

  const [validEmail, setValidEmail] = useState(true);

  const validateData = useCallback(() => {
    setValidEmail(isEmailValid(stepData.data.email));
  }, [stepData]);

  const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const setValue = (forKey, value) => {
    dispatch(
      setWizard(SET_STEP_DATA, {
        ...stepData,
        data: { ...stepData.data, [forKey]: value },
      })
    );
  };

  const checkComplete = useCallback(() => {
    if (validEmail && !stepData.complete) {
      dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: true }));
    }
    if (!validEmail && stepData.complete) {
      dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: false }));
    }
  }, [dispatch, stepData, validEmail]);

  useEffect(() => {
    validateData();
    checkComplete();
  }, [stepData, validateData, checkComplete]);

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
