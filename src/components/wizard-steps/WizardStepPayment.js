import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import * as styles from "./WizardSteps.module.scss";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { PayPalButton } from "react-paypal-button-v2";

const WizardStepPayment = () => {
  const [paid, setPaid] = useState(false);
  return (
    <Row>
      <Col>
        {!paid && (
          <PayPalButton
            amount={99.99}
            shippingPreference="NO_SHIPPING"
            onSuccess={(details, data) => {
              setPaid(true);
            }}
            options={{
              clientId:
                "AXyuMJEpKkrKG0BvMMouM7A7eDDTRcwNbCW1a5CnvH4XDSNW1Arb0tYM2_JYT-xLhn2590VNmoPdHLea",
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
