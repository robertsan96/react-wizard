import {
  SET_STEPS,
  SET_ACTIVE_STEP,
  SET_STEP_DATA,
} from "../actions/wizard.actions";
import {
  WIZARD_DATA_ABOUT,
  WIZARD_DATA_BUSINESS,
} from "../../constants/wizard_data";

const initialState = {
  steps: [],
  activeStep: undefined,
  data: [WIZARD_DATA_ABOUT, WIZARD_DATA_BUSINESS],
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
