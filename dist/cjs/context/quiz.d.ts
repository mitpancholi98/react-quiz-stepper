import React from 'react';
import { QuizProviderProps, QuizState, ReportState, SimplifiedQuestion } from '../utility/interfaces';
import { QuizActions } from './actions/quiz';
declare const QuizProvider: ({ children, questions }: QuizProviderProps) => JSX.Element;
export declare const useQuiz: () => {
    getQuestion: (questionId: number) => SimplifiedQuestion;
    getSavedAnswer: (questionId: number) => number | number[] | "";
    generateReport: () => ReportState;
    state: QuizState;
    dispatch: React.Dispatch<QuizActions>;
};
export default QuizProvider;
