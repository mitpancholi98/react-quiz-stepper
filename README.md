react-quiz-stepper is a react component that gives handy access to quiz data
combined with stepper. Behind the scenes it uses context api, so it can be accessed
at any level in component tree. Most basic hooks are useQuiz and useStepper.

## Install

```sh
npm i react-quiz-stepper
```

## Features

<ul>
<li>Ready to use quiz builder with stepper component</li>
<li>Multi language</li>
<li>Supports multi choice</li>
<li>Report generation</li>
</ul>

## Quick Start

Wrap your app inside **QuizProvider**. (It asks for questions array to initialize with.)
and don't forget to import css file.

```jsx
import React from 'react';
import { QuizProvider } from 'react-quiz-stepper'
import 'react-quiz-stepper/dist/index.css

function App () {
  return (
    <QuizProvider questions={[...]}>
      {/* rest of your code here */%}
    </QuizProvider>
  )
}
export default App
```

Now create your Stepper component and put it inside QuizProvider.

```jsx
import React from 'react';
import { Stepper, useQuiz } from 'react-quiz-stepper'

function QuizStepperDemo () {
  const { state } = useQuiz()

  return (
    <Stepper>
      {state.questions.map((question) => ...)}
      {/**
        *  map through all questions and render
        * appropriate input
        * (multi choice or single choice based on question.type)
      */}
    </Stepper>
  )
}

export default App
```

### What useQuiz hook gives you

```js
const { state, dispatch, getQuestion, getSavedAnswer, generateReport } =
  useQuiz();
```

getSavedAnswer: (questionId: number) => number | number[] | "".
getQuestion: (questionId: number) => SimplifiedQuestion.
generateReport: () => ReportState.

**Following actions can be dispatched**

saveUser: (payload: User).
saveQuestionAnswer: (payload: UserInput).

### What useStepper hook gives you

```js
const { step, handleNext, handleBack, goToStep, isLastStep } = useStepper();
```

step gives index of currently active question.
It is possible to bind **handleBack and handleNext** to on click event, to go to next previous and next question respectively

goToStep: (index: number)
