export var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Single"] = 0] = "Single";
    QuestionType[QuestionType["Multiple"] = 1] = "Multiple";
})(QuestionType || (QuestionType = {}));
export var Flow;
(function (Flow) {
    Flow[Flow["Form"] = 0] = "Form";
    Flow[Flow["Quiz"] = 1] = "Quiz";
    Flow[Flow["Report"] = 2] = "Report";
})(Flow || (Flow = {}));
export var AnswerType;
(function (AnswerType) {
    AnswerType["Wrong"] = "Wrong";
    AnswerType["Correct"] = "Correct";
})(AnswerType || (AnswerType = {}));
