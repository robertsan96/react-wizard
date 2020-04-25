import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import BusinessIcon from "@material-ui/icons/Business";
import PaymentIcon from "@material-ui/icons/Payment";

export const WIZARD_STEP_ABOUT = "wizard/step/about";
export const WIZARD_STEP_COMPANY = "wizard/step/company";
export const WIZARD_STEP_PAYMENT = "wizard/step/payment";

export const WIZARD_STEPS = [
  {
    id: WIZARD_STEP_ABOUT,
    title: "Create your profile",
    description: "This information will let us know more about you.",
    name: "About you",
    icon: <PersonIcon style={{ fontSize: 44, color: "#fff" }} />,
  },
  {
    id: WIZARD_STEP_COMPANY,
    title: "Business details",
    description: "We guarantee that the data is safely stored.",
    name: "Business",
    icon: <BusinessIcon style={{ fontSize: 44, color: "#fff" }} />,
  },
  {
    id: WIZARD_STEP_PAYMENT,
    title: "Awesome!",
    description: "Use the Paypal button to make a payment.",
    name: "Payment",
    icon: <PaymentIcon style={{ fontSize: 44, color: "#fff" }} />,
  },
];
