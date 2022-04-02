### Install

```
npm i react-quiz-stepper
```

### Features

<ul>
<li>Ready to use quiz builder with stepper component</li>
<li>Multi language</li>
<li>Supports multi choice</li>
<li>Report generation</li>
</ul>

### Quickstart

Wrap your app inside **QuizProvider**. (It asks for questions array to initialize with.)

```
import React from 'react';
import { QuizProvider } from 'react-quiz-stepper'
function App () {
	return (
		<QuizProvider questions={[...]}>
			// rest of your code here
		</QuizProvider>
	)
}
export default App
```

Now create your Stepper component and put it inside QuizProvider.

```
import React from 'react';
import { Stpper, useQuiz } from 'react-quiz-stepper'
function QuizStepperDemo () {
	const { state } = useQuiz()

	return (
		<Stpper>
			{state.questions.map((question) => ...)}
			// map through all questions and render
			// appropriate input
			// (multi choiece or single choice based on question.type)
		</Stpper>
	)
}
export default App
```

#### What useQuiz hook gives you

```
const {
	state,
	dispatch,
	getQuestion,
	getSavedAnswer,
	generateReport
} = useQuiz()
```

getSavedAnswer: (questionId: number) => number | number[] | ""
getQuestion: (questionId: number) => SimplifiedQuestion
generateReport: () => ReportState

**Following actions can be dispatched**
saveUser: (payload: User)
saveQuestionAnswer: (payload: UserInput)

#### What useStepper hook gives you

```
const {
	step,
	handleNext,
	handleBack,
	goToStep,
	isLastStep
} = useQuiz()
```

step is currently active question
handleBack and handleNext can be binded to button on click, to go to next previous and next question respectively
goToStep: (index: number)
