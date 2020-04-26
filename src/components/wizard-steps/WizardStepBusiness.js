import React, { useState, useEffect, useCallback } from "react";

import { Row, Col, Form } from "react-bootstrap";

import * as styles from "./WizardSteps.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { WIZARD_STEP_COMPANY } from "../../constants/wizard_steps";
import { setWizard, SET_STEP_DATA } from "../../store/actions/wizard.actions";
import { WIZARD_DATA_BUSINESS } from "../../constants/wizard_data";

const WizardStepBusiness = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const step = wizard.steps.find((s) => s.data.id === WIZARD_STEP_COMPANY);
  const stepData = wizard.data.find((s) => s.id === step.data.id);

  const requiredFields = Object.keys(WIZARD_DATA_BUSINESS.data);

  const [valid, setValid] = useState(false);

  const setValue = (forKey, value) => {
    dispatch(
      setWizard(SET_STEP_DATA, {
        ...stepData,
        data: { ...stepData.data, [forKey]: value },
      })
    );
  };

  const checkComplete = useCallback(() => {
    if (valid && !stepData.complete) {
      dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: true }));
    }
    if (!valid && stepData.complete) {
      dispatch(setWizard(SET_STEP_DATA, { ...stepData, complete: false }));
    }
  }, [dispatch, valid, stepData]);

  const validField = useCallback(
    (field) => {
      return stepData.data[field];
    },
    [stepData]
  );

  const validateData = useCallback(() => {
    let validData = true;
    for (const field of requiredFields) {
      if (!validField(field)) {
        validData = false;
        break;
      }
    }
    setValid(validData);
  }, [requiredFields, validField]);

  useEffect(() => {
    validateData();
    checkComplete();
  }, [validateData, checkComplete]);

  return (
    <Row>
      <Col className={styles.ComponentContainer}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridBusinessName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!validField("name")}
                value={stepData.data.name}
                onChange={(e) => setValue("name", e.target.value)}
                placeholder="Enter company name..."
              />

              <Form.Control.Feedback type="invalid">
                Provide a company name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBusinessWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                required
                type="text"
                isInvalid={!validField("website")}
                value={stepData.data.website}
                onChange={(e) => setValue("website", e.target.value)}
                placeholder="Enter company website..."
              />
              <Form.Control.Feedback type="invalid">
                Provide a website.
              </Form.Control.Feedback>
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
              isInvalid={!validField("businessEmail")}
              value={stepData.data.businessEmail}
              onChange={(e) => setValue("businessEmail", e.target.value)}
              placeholder="Enter company business email address..."
            />
            <Form.Control.Feedback type="invalid">
              Please provide an email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridBusinessStreet">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              isInvalid={!validField("address")}
              value={stepData.data.address}
              onChange={(e) => setValue("address", e.target.value)}
              placeholder="Enter company full address.."
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default WizardStepBusiness;
