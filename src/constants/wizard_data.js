import { WIZARD_STEP_ABOUT, WIZARD_STEP_COMPANY } from "./wizard_steps";

export const WIZARD_DATA = {
  id: "",
  data: {},
  complete: false,
};

export const WIZARD_DATA_ABOUT = {
  id: WIZARD_STEP_ABOUT,
  complete: false,
  data: {
    firstName: "",
    lastName: "",
    email: "",
  },
};

export const WIZARD_DATA_BUSINESS = {
  id: WIZARD_STEP_COMPANY,
  complete: false,
  data: {
    name: "",
    website: "",
    businessEmail: "",
    address: "",
  },
};
