import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setWizard, SET_STEP_DATA } from "../store/actions/wizard.actions";
import { WIZARD_DATA } from "../constants/wizard_data";

export const useStepDataInitializer = () => {
  const dispatch = useDispatch();
  const wizard = useSelector((state) => state.wizardReducer);
  const activeStep = wizard.activeStep;

  useEffect(() => {
    if (!activeStep) return;
    const stepData = wizard.data.find((s) => s.id === activeStep.data.id);
    if (!stepData) {
      dispatch(
        setWizard(SET_STEP_DATA, { ...WIZARD_DATA, id: activeStep.data.id })
      );
    }
  }, [dispatch, activeStep, wizard.data]);
};
