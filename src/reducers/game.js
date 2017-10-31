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
  const {currentQuestionIndex} = state
  let currentQuestion = state.questions[currentQuestionIndex]
  if(answer === currentQuestion.answer){
    state.questions[currentQuestionIndex].correct = true
  } else {
    state.questions[currentQuestionIndex].correct = false
  }
  state.currentQuestionIndex++
  return({
    ...state
  })
}
