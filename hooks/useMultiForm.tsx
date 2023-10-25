import { useState } from "react";

const useMultiForm = (formSteps: number) => {
  const [currentIndex, setCurrentindex] = useState(0);

  const goBackwards = () => {
    if (currentIndex === 0) return;
    setCurrentindex((prev) => prev - 1);
  };
  const goForwards = () => {
    if (currentIndex === formSteps - 1) return;
    setCurrentindex((prev) => prev + 1);
  };
  const goToSection = (index: number) => {
    setCurrentindex(index);
  };
  return {
    currentIndex,
    goBackwards,
    goForwards,
    goToSection,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 1,
  };
};

export default useMultiForm;
