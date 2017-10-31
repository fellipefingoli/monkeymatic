export default function game (state = {}, payload) {
  switch (payload.type) {
    case 'CHECK_ANSWER':
      return (checkAnswer(state, payload))
    default:
      return state
  }
}

function checkAnswer(state, payload) {
  const {answer} = payload
  const {currentQuestion} = state
  if(answer === state.stages[currentQuestion].correctAnswer){
    state.stages[currentQuestion].isCorrect = true
  } else {
    state.stages[currentQuestion].isCorrect = false
  }
  state.currentQuestion++
  return({
    ...state
  })
}
