import React, { useState, useEffect, useCallback } from "react";

import { Row, Col, Form } from "react-bootstrap";

import * as styles from "./WizardSteps.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";
import { setWizard, SET_STEP_DATA } from "../../store/actions/wizard.actions";

const WizardStepBusiness = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const step = wizard.steps.find((s) => s.data.id === WIZARD_STEP_ABOUT);
  const stepData = wizard.data.find((s) => s.id === step.data.id);

  const setValue = (forKey, value) => {
    dispatch(
      setWizard(SET_STEP_DATA, {
        ...stepData,
        data: { ...stepData.data, [forKey]: value },
      })
    );
  };

  // const checkComplete = useCallback(() => {
  //   if (validEmail && !stepData.complete) {
  //     dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: true }));
  //   }
  //   if (!validEmail && stepData.complete) {
  //     dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: false }));
  //   }
  // }, [dispatch, stepData, validEmail]);

  useEffect(() => {
    // validateData();
    // checkComplete();
  }, [stepData]);

  return (
    <Row>
      <Col className={styles.ComponentContainer}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridBusinessName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={stepData.data.firstName}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter company name..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBusinessWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                required
                type="text"
                value={stepData.data.website}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter company website..."
              />
            </Form.Group>
          </Form.Row>
          <Form.Label>Business Type</Form.Label>
          <Form.Row className={styles.BusinessTypeRow}>
            <Form.Check
              custom
              inline
              label="Type 1"
              type={"checkbox"}
              id={`custom-inline-checkbox-1`}
            />
            <Form.Check
              custom
              inline
              label="Type 2"
              type={"checkbox"}
              id={`custom-inline-checkbox-2`}
            />
            <Form.Check
              custom
              inline
              label="Type 3"
              type={"checkbox"}
              id={`custom-inline-checkbox-3`}
            />
          </Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Business Email</Form.Label>
            <Form.Control
              required
              type="text"
              value={stepData.data.email}
              onChange={(e) => setValue("email", e.target.value)}
              placeholder="Enter company business email address..."
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridBusinessStreet">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              value={stepData.data.firstName}
              onChange={(e) => setValue("firstName", e.target.value)}
              placeholder="Enter company street address..."
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridBusinessCity">
              <Form.Control
                required
                type="text"
                value={stepData.data.firstName}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter company city..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBusinessWebsite">
              <Form.Control
                required
                type="text"
                value={stepData.data.website}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter company State / Region..."
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridBusinessCity">
              <Form.Control
                required
                type="text"
                value={stepData.data.firstName}
                onChange={(e) => setValue("firstName", e.target.value)}
                placeholder="Enter postal/zip code..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom>
                <option>United States</option>
                <option>Russia</option>
                <option>Romania</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridBusinessDescription">
            <Form.Label>About your Company</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default WizardStepBusiness;
