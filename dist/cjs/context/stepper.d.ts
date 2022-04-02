import { IStepperContext, StepperProps } from '../utility/interfaces';
import React from 'react';
export declare const StepperContext: React.Context<IStepperContext | undefined>;
declare const Stepper: React.FC<StepperProps>;
export declare const useStepper: () => IStepperContext;
export default Stepper;
