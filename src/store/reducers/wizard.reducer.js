import { SET_STEPS, SET_ACTIVE_STEP } from "../actions/wizard.actions";

const initialState = {
  steps: [],
  activeStep: undefined,
};

export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    default:
      return state;
  }
};
