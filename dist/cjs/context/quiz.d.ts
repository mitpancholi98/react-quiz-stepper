import React from 'react';
import { QuizProviderProps, QuizState, ReportState, SimplifiedQuestion } from '../utility/interfaces';
import { QuizActions } from './actions/quiz';
declare const QuizProvider: React.FC<QuizProviderProps & React.ReactNode>;
export declare const useQuiz: () => {
    getQuestion: (questionId: number) => SimplifiedQuestion;
    getSavedAnswer: (questionId: number) => number | number[] | "";
    generateReport: () => ReportState;
    state: QuizState;
    dispatch: React.Dispatch<QuizActions>;
};
export default QuizProvider;
