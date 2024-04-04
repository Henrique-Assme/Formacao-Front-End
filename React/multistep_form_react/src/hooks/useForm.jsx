import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(step, event) {
    if (event) event.preventDefault();
    if (step < 0 || step >= steps.length) return;
    setCurrentStep(step);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length,
    isFirstStep: currentStep === 0,
  };
}
