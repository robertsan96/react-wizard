import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import * as styles from "./WizardSteps.module.scss";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { PayPalButton } from "react-paypal-button-v2";
import { getPaypalId } from "../../constants/paypal";

const WizardStepPayment = () => {
  const [paid, setPaid] = useState(false);

  return (
    <Row>
      <Col className={styles.ComponentContainer}>
        {!paid && (
          <PayPalButton
            amount={0.01}
            shippingPreference="NO_SHIPPING"
            onSuccess={(details, data) => {
              // Call backend api with data collected.
              setPaid(true);
            }}
            options={{
              clientId: getPaypalId(),
            }}
          />
        )}
        {paid && (
          <div className={styles.PaymentSuccessContainer}>
            <CheckCircleOutlineIcon />
            <h2>Thank you!</h2>
            <p>
              You'll receive an email shortly with the payment confirmation.
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default WizardStepPayment;
