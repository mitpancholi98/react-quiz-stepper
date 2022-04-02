export var QuizActionType;
(function (QuizActionType) {
    QuizActionType[QuizActionType["SaveUserData"] = 0] = "SaveUserData";
    QuizActionType[QuizActionType["SaveAnsweredQuestionData"] = 1] = "SaveAnsweredQuestionData";
})(QuizActionType || (QuizActionType = {}));
// action creators
export var saveUser = function (payload) { return ({
    type: QuizActionType.SaveUserData,
    payload: payload,
}); };
export var saveQuestionAnswer = function (payload) { return ({
    type: QuizActionType.SaveAnsweredQuestionData,
    payload: payload,
}); };
