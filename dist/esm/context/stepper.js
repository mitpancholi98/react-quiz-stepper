import React, { useContext, createContext, useState } from 'react';
// import { useQuiz } from './quiz';
export var StepperContext = createContext(undefined);
var Stepper = function (_a) {
    var children = _a.children, onFinish = _a.onFinish;
    var childrenArray = React.Children.toArray(children);
    var _b = useState(0), step = _b[0], setStep = _b[1];
    // const { state } = useQuiz();
    var isLastStep = step === childrenArray.length - 1;
    var currentChild = childrenArray[step];
    var handleNext = function () {
        if (isLastStep) {
            onFinish();
        }
        else {
            setStep(function (s) { return s + 1; });
        }
    };
    var goToStep = function (index) {
        setStep(function () { return index; });
    };
    var handleBack = function () {
        setStep(function (s) { return s - 1; });
    };
    // const isCompleted = (questionId: number) => {
    //   return (
    //     state.userInputs?.findIndex((ui) => ui.questionId === questionId) > -1
    //   );
    // };
    return (React.createElement(StepperContext.Provider, { value: {
            step: step,
            handleNext: handleNext,
            goToStep: goToStep,
            handleBack: handleBack,
            isLastStep: isLastStep,
        } }, currentChild));
};
export var useStepper = function () {
    var context = useContext(StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a <Stepper> component.');
    }
    return context;
};
export default Stepper;
