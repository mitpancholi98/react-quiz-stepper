import { User, UserInput } from '../../utility/interfaces';
export declare enum QuizActionType {
    SaveUserData = 0,
    SaveAnsweredQuestionData = 1
}
export interface SaveUserAction {
    type: QuizActionType.SaveUserData;
    payload: User;
}
export interface SaveAnswerAction {
    type: QuizActionType.SaveAnsweredQuestionData;
    payload: UserInput;
}
export declare const saveUser: (payload: User) => SaveUserAction;
export declare const saveQuestionAnswer: (payload: UserInput) => SaveAnswerAction;
export declare type QuizActions = SaveUserAction | SaveAnswerAction;
