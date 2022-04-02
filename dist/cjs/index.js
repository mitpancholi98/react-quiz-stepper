"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStepper = exports.Stepper = exports.useQuiz = exports.QuizProvider = void 0;
var quiz_1 = require("./context/quiz");
Object.defineProperty(exports, "QuizProvider", { enumerable: true, get: function () { return __importDefault(quiz_1).default; } });
Object.defineProperty(exports, "useQuiz", { enumerable: true, get: function () { return quiz_1.useQuiz; } });
__exportStar(require("./context/actions/quiz"), exports);
var stepper_1 = require("./context/stepper");
Object.defineProperty(exports, "Stepper", { enumerable: true, get: function () { return __importDefault(stepper_1).default; } });
Object.defineProperty(exports, "useStepper", { enumerable: true, get: function () { return stepper_1.useStepper; } });
__exportStar(require("./utility/interfaces"), exports);
__exportStar(require("./utility/enums"), exports);
__exportStar(require("./utility/constants"), exports);
