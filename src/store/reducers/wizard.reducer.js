import {
  SET_STEPS,
  SET_ACTIVE_STEP,
  SET_STEP_DATA,
} from "../actions/wizard.actions";
import { WIZARD_STEP_ABOUT } from "../../constants/wizard_steps";

const initialState = {
  steps: [],
  activeStep: undefined,
  data: [],
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
    case SET_STEP_DATA:
      const allExceptActive = state.data.filter(
        (d) => d.id !== action.payload.id
      );
      return {
        ...state,
        data: [...allExceptActive, action.payload],
      };
    default:
      return state;
  }
};
