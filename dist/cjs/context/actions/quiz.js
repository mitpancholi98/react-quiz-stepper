"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveQuestionAnswer = exports.saveUser = exports.QuizActionType = void 0;
var QuizActionType;
(function (QuizActionType) {
    QuizActionType[QuizActionType["SaveUserData"] = 0] = "SaveUserData";
    QuizActionType[QuizActionType["SaveAnsweredQuestionData"] = 1] = "SaveAnsweredQuestionData";
})(QuizActionType = exports.QuizActionType || (exports.QuizActionType = {}));
// action creators
var saveUser = function (payload) { return ({
    type: QuizActionType.SaveUserData,
    payload: payload,
}); };
exports.saveUser = saveUser;
var saveQuestionAnswer = function (payload) { return ({
    type: QuizActionType.SaveAnsweredQuestionData,
    payload: payload,
}); };
exports.saveQuestionAnswer = saveQuestionAnswer;
