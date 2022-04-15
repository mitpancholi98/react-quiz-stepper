import { IStepperContext, StepperProps } from '../utility/interfaces';
import React from 'react';
export declare const StepperContext: React.Context<IStepperContext | undefined>;
declare const Stepper: ({ children, onFinish }: StepperProps) => JSX.Element;
export declare const useStepper: () => IStepperContext;
export default Stepper;
