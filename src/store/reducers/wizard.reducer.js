import { WIZARD_STEPS, WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";

const initialState = {
  steps: WIZARD_STEPS,
  activeStepId: WIZARD_STEP_ABOUT,
};

export const wizardReducer = (state = initialState, action) => {
  return state;
};
