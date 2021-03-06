"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuiz = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("react");
var enums_1 = require("../utility/enums");
var quiz_1 = require("./actions/quiz");
var quizContextState = {
    state: { questions: [], userInputs: [] },
    dispatch: function () { return undefined; },
};
var quizReducer = function (state, action) {
    switch (action.type) {
        case quiz_1.QuizActionType.SaveUserData: {
            return __assign(__assign({}, state), { user: action.payload });
        }
        case quiz_1.QuizActionType.SaveAnsweredQuestionData: {
            var isAlreadyAnswered = state.userInputs.findIndex(function (q) { return q.questionId === action.payload.questionId; });
            if (isAlreadyAnswered > -1) {
                var updatedInputs = state.userInputs.map(function (i) {
                    return i.questionId === action.payload.questionId ? action.payload : i;
                });
                return __assign(__assign({}, state), { userInputs: updatedInputs });
            }
            return __assign(__assign({}, state), { userInputs: __spreadArray(__spreadArray([], state.userInputs, true), [action.payload], false) });
        }
        default:
            return state;
    }
};
var QuizContext = (0, react_2.createContext)(quizContextState);
var QuizProvider = function (_a) {
    var children = _a.children, questions = _a.questions;
    var defaultQuizState = {
        questions: questions,
        userInputs: [],
    };
    var _b = (0, react_1.useReducer)(quizReducer, defaultQuizState), state = _b[0], dispatch = _b[1];
    return (react_1.default.createElement(QuizContext.Provider, { value: { state: state, dispatch: dispatch } }, children));
};
var useQuiz = function () {
    var context = (0, react_1.useContext)(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be used within a <QuizProvider> component.');
    }
    var getQuestion = function (questionId) {
        var _a, _b, _c;
        var userLanguageId = ((_a = context.state.user) === null || _a === void 0 ? void 0 : _a.languageId) || 1;
        var currentQuestion = context.state.questions.find(function (q) { return q.questionId === questionId; });
        if (!currentQuestion)
            throw new Error('Question Not Found');
        var title = ((_c = (_b = currentQuestion.questionInfo) === null || _b === void 0 ? void 0 : _b.find(function (qi) { return qi.languageId === userLanguageId; })) === null || _c === void 0 ? void 0 : _c.title) || '';
        var compressedOptions = currentQuestion.optionsInfo.map(function (oi) {
            var _a;
            var compressedOptionTitle = (_a = oi.languageInfo.find(function (lang) { return lang.languageId === userLanguageId; })) === null || _a === void 0 ? void 0 : _a.title;
            return {
                id: oi.id,
                title: compressedOptionTitle || '',
            };
        });
        var compressedQuestion = {
            questionId: currentQuestion.questionId,
            type: currentQuestion.type,
            title: title,
            options: compressedOptions,
        };
        return compressedQuestion;
    };
    var getSavedAnswer = function (questionId) {
        var _a;
        return ((_a = context.state.userInputs.find(function (ui) { return ui.questionId === questionId; })) === null || _a === void 0 ? void 0 : _a.answerId) || '';
    };
    var generateReport = function () {
        var _a;
        var totalCorrect = 0;
        var totalUnAnswered = 0;
        var questionAnswers = [];
        var userLanguageId = ((_a = context.state.user) === null || _a === void 0 ? void 0 : _a.languageId) || 1;
        context.state.questions.forEach(function (q) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var foundUserInput = context.state.userInputs.find(function (ui) { return ui.questionId === q.questionId; });
            var questionInPreferredLanguage = ((_a = q.questionInfo.find(function (qi) { return qi.languageId === userLanguageId; })) === null || _a === void 0 ? void 0 : _a.title) ||
                'Not Found';
            var correctAnswerString = q.type === enums_1.QuestionType.Single
                ? ((_d = (_c = (_b = q.optionsInfo
                    .find(function (oi) { return oi.id === q.correctAnswerId; })) === null || _b === void 0 ? void 0 : _b.languageInfo) === null || _c === void 0 ? void 0 : _c.find(function (li) { return li.languageId === userLanguageId; })) === null || _d === void 0 ? void 0 : _d.title) || 'Not Found'
                : ((_e = q.correctAnswerId
                    .map(function (ca) {
                    var _a, _b, _c;
                    var answer = ((_c = (_b = (_a = q.optionsInfo
                        .find(function (oi) { return oi.id === ca; })) === null || _a === void 0 ? void 0 : _a.languageInfo) === null || _b === void 0 ? void 0 : _b.find(function (li) { return li.languageId === userLanguageId; })) === null || _c === void 0 ? void 0 : _c.title) || 'Not Found';
                    return answer;
                })) === null || _e === void 0 ? void 0 : _e.join(', ')) || 'Not Found';
            var selectedAnswerString = q.type === enums_1.QuestionType.Single
                ? ((_h = (_g = (_f = q.optionsInfo
                    .find(function (oi) { return oi.id === (foundUserInput === null || foundUserInput === void 0 ? void 0 : foundUserInput.answerId); })) === null || _f === void 0 ? void 0 : _f.languageInfo) === null || _g === void 0 ? void 0 : _g.find(function (li) { return li.languageId === userLanguageId; })) === null || _h === void 0 ? void 0 : _h.title) || 'Unanswered'
                : ((_j = ((foundUserInput === null || foundUserInput === void 0 ? void 0 : foundUserInput.answerId) || [])
                    .map(function (i) {
                    var _a, _b, _c;
                    var yourAnswer = ((_c = (_b = (_a = q.optionsInfo
                        .find(function (oi) { return oi.id === i; })) === null || _a === void 0 ? void 0 : _a.languageInfo) === null || _b === void 0 ? void 0 : _b.find(function (li) { return li.languageId === userLanguageId; })) === null || _c === void 0 ? void 0 : _c.title) || 'Unanswered';
                    return yourAnswer;
                })) === null || _j === void 0 ? void 0 : _j.join(', ')) || 'Unanswered';
            if (!(foundUserInput === null || foundUserInput === void 0 ? void 0 : foundUserInput.questionId)) {
                totalUnAnswered += 1;
                questionAnswers.push({
                    id: q.questionId,
                    question: questionInPreferredLanguage,
                    correctAnswer: correctAnswerString,
                    status: enums_1.AnswerType.Wrong,
                    selectedAnswer: selectedAnswerString,
                });
            }
            else {
                if (q.type === enums_1.QuestionType.Single) {
                    if (foundUserInput.answerId === q.correctAnswerId) {
                        totalCorrect += 1;
                        questionAnswers.push({
                            id: q.questionId,
                            question: questionInPreferredLanguage,
                            correctAnswer: correctAnswerString,
                            status: enums_1.AnswerType.Correct,
                        });
                    }
                    else {
                        questionAnswers.push({
                            id: q.questionId,
                            question: questionInPreferredLanguage,
                            correctAnswer: correctAnswerString,
                            status: enums_1.AnswerType.Wrong,
                            selectedAnswer: selectedAnswerString,
                        });
                    }
                }
                if (q.type === enums_1.QuestionType.Multiple) {
                    if (JSON.stringify(foundUserInput.answerId) ===
                        JSON.stringify(q.correctAnswerId)) {
                        totalCorrect += 1;
                        questionAnswers.push({
                            id: q.questionId,
                            question: questionInPreferredLanguage,
                            correctAnswer: correctAnswerString,
                            status: enums_1.AnswerType.Correct,
                        });
                    }
                    else {
                        questionAnswers.push({
                            id: q.questionId,
                            question: questionInPreferredLanguage,
                            correctAnswer: correctAnswerString,
                            status: enums_1.AnswerType.Wrong,
                            selectedAnswer: selectedAnswerString,
                        });
                    }
                }
            }
        });
        var totalIncorrect = context.state.questions.length - (totalCorrect + totalUnAnswered);
        var percentage = ((totalCorrect / context.state.questions.length) *
            100).toFixed(2);
        var payload = {
            chartData: [
                { name: 'Total Correct', value: totalCorrect },
                { name: 'Total Incorrect', value: totalIncorrect },
                { name: 'Total Unanswered', value: totalUnAnswered },
            ],
            percentage: percentage,
            questionAnswers: questionAnswers,
        };
        return payload;
    };
    return __assign(__assign({}, context), { getQuestion: getQuestion, getSavedAnswer: getSavedAnswer, generateReport: generateReport });
};
exports.useQuiz = useQuiz;
exports.default = QuizProvider;
