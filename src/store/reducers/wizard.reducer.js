import { WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";
import { SET_STEPS } from "../actions/wizard.actions";

const initialState = {
  steps: [],
  activeStepId: WIZARD_STEP_ABOUT,
};

export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    default:
      return state;
  }
};
