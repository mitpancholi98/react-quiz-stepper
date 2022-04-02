"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStepper = exports.StepperContext = void 0;
var react_1 = __importStar(require("react"));
// import { useQuiz } from './quiz';
exports.StepperContext = (0, react_1.createContext)(undefined);
var Stepper = function (_a) {
    var children = _a.children, onFinish = _a.onFinish;
    var childrenArray = react_1.default.Children.toArray(children);
    var _b = (0, react_1.useState)(0), step = _b[0], setStep = _b[1];
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
    return (react_1.default.createElement(exports.StepperContext.Provider, { value: {
            step: step,
            handleNext: handleNext,
            goToStep: goToStep,
            handleBack: handleBack,
            isLastStep: isLastStep,
        } }, currentChild));
};
var useStepper = function () {
    var context = (0, react_1.useContext)(exports.StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a <Stepper> component.');
    }
    return context;
};
exports.useStepper = useStepper;
exports.default = Stepper;
