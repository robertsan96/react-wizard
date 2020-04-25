import { WIZARD_STEP_ABOUT } from "./wizard_steps";

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
