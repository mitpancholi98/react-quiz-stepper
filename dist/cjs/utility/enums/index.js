"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerType = exports.Flow = exports.QuestionType = void 0;
var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Single"] = 0] = "Single";
    QuestionType[QuestionType["Multiple"] = 1] = "Multiple";
})(QuestionType = exports.QuestionType || (exports.QuestionType = {}));
var Flow;
(function (Flow) {
    Flow[Flow["Form"] = 0] = "Form";
    Flow[Flow["Quiz"] = 1] = "Quiz";
    Flow[Flow["Report"] = 2] = "Report";
})(Flow = exports.Flow || (exports.Flow = {}));
var AnswerType;
(function (AnswerType) {
    AnswerType["Wrong"] = "Wrong";
    AnswerType["Correct"] = "Correct";
})(AnswerType = exports.AnswerType || (exports.AnswerType = {}));
