import { CHECK_ANSWER, NEXT_STAGE } from '../actions'

export default function game (state = {}, payload) {
  switch (payload.type) {
    case CHECK_ANSWER:
      return checkAnswer(state, payload)
    case NEXT_STAGE:
      return nextStage(state, payload)
    default:
      return state
  }
}

function checkAnswer(state, payload) {
  const {answer} = payload
  let {currentStage} = state
  if(answer === state.stages[currentStage].correctAnswer){
    state.stages[currentStage].isCorrect = true
    state.points = state.points + 10
  } else {
    state.stages[currentStage].isCorrect = false
  }
  let anwserIndex = state.stages[currentStage].questions.indexOf('?')
  state.stages[currentStage].questions[anwserIndex] = answer
  state.answering = true
  return {
    ...state
  }
}

function nextStage(state, payload) {
  console.log("nextStage")
  state.currentStage++
  state.answering = false
  return {
    ...state
  }
}
