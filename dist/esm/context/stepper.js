import React, { useContext, createContext, useState } from 'react';
import { useQuiz } from './quiz';
export var StepperContext = createContext(undefined);
var Stepper = function (_a) {
    var children = _a.children, onFinish = _a.onFinish;
    var childrenArray = React.Children.toArray(children);
    var _b = useState(0), step = _b[0], setStep = _b[1];
    var state = useQuiz().state;
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
    var isCompleted = function (questionId) {
        var _a;
        return (((_a = state.userInputs) === null || _a === void 0 ? void 0 : _a.findIndex(function (ui) { return ui.questionId === questionId; })) > -1);
    };
    return (React.createElement(StepperContext.Provider, { value: {
            step: step,
            handleNext: handleNext,
            goToStep: goToStep,
            handleBack: handleBack,
            isLastStep: isLastStep,
        } },
        state.questions.length > 0 && (React.createElement("div", { className: 'stepper-container' }, state.questions.map(function (q, i) {
            var isStepDone = isCompleted(q.questionId);
            return (React.createElement("div", { key: q.questionId, className: "stepper-item ".concat(isStepDone ? 'completed' : '', " ").concat(step === i ? 'active' : '') },
                React.createElement("button", { className: 'step-counter', onClick: function () { return i !== step && setStep(i); } }, isStepDone ? '✔' : i + 1)));
        }))),
        currentChild));
};
export var useStepper = function () {
    var context = useContext(StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a <Stepper> component.');
    }
    return context;
};
export default Stepper;
